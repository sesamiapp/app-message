import { getToken } from './authentication.app'
import { getInit } from './init.app'
import { Environment } from '../types'
import { initListener } from '../utils'
import { getAccessTokenExpiration } from 'utils/parse-jwt-token'
import { TeamMember } from 'types'

export class Sesami {

    //generic:
    clientId: string
    environment: Environment | null = null
    shopId: string
    locale: string

    //admin:
    private token: string | null = null

    //experience:
    productId: string | null = null
    variantId: string | null = null
    quantity: string | null = null
    teamMember: TeamMember | null = null
    slot: Date | null = null

    constructor(
        clientId: string,
        environment: Environment,
        shopId: string,
        locale: string,
        productId?: string,
        variantId?: string,
        quantity?: string,
        teamMember?: TeamMember,
        slot?: Date
    ){
        this.clientId = clientId
        this.environment = environment
        this.shopId = shopId
        this.locale = locale
        if(productId){
            this.productId = productId
        }
        if(variantId){
            this.variantId = variantId
        }
        if(quantity){
            this.quantity = quantity
        }
        if(teamMember){
            this.teamMember = teamMember
        }
        if(slot){
            this.slot = slot
        }
    }

    static init = async (clientId: string) => {
        initListener()
        const payload: any = await getInit()
        return new Sesami(
            clientId,
            payload.environment,
            payload.shopId,
            payload.locale
        )
    }

    getToken = this.environment === Environment.ADMIN_APP ? async () => {
        if(this.token && !isTokenExpired(this.token)){
            return this.token
        }else{
            const token = await getToken(this.clientId)
            this.token = token as string
            return token
        }
    } : undefined

}

const isTokenExpired = (token: string) => {
    const now = new Date()
    if((getAccessTokenExpiration(token) - 30)*1000 > now.getTime()){ // 30 seconds offset
        return false
    }else{
        return true
    }
}
