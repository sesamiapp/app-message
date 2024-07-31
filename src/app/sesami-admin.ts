import { getToken } from './authentication.app'
import { getInit } from './init.app'
import { initListener, isTokenExpired } from '../utils'
import { AdminTarget } from '../types'

export class SesamiAdmin {

    private target: AdminTarget | null = null
    private zone: AdminTarget | null = null
    private shopId: string
    private locale: string
    private token: string | null = null

    getEnvironment = () => this.environment
    getShopId = () => this.shopId
    getLocale = () => this.locale

    constructor(
        environment: AdminTarget,
        shopId: string,
        locale: string
    ){
        this.environment = environment
        this.shopId = shopId
        this.locale = locale
    }
    
    static init = async (clientId: string) => {
        initListener()
        const payload: any = await getInit()
        return new SesamiAdmin(
            clientId,
            payload.environment,
            payload.shopId,
            payload.locale
        )
    }

    getToken = async () => {
        if(this.token && !isTokenExpired(this.token)){
            return this.token
        }else{
            const token = await getToken(this.clientId)
            this.token = token as string
            return token
        }
    }

}
