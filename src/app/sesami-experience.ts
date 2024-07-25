import { acceptNext, onNext, rejectNext } from './events.app'
import { getInit } from './init.app'
import { Environment, TeamMember } from '../types'
import { initListener } from '../utils'

export class SesamiExperience {

    private environment: Environment | null = null
    private shopId: string
    private locale: string
    private productId: string | null = null
    private variantId: string | null = null
    private quantity: string | null = null
    private teamMember: TeamMember | null = null
    private slot: Date | null = null

    getEnvironment = () => this.environment
    getShopId      = () => this.shopId
    getLocale      = () => this.locale
    getProductId   = () => this.productId
    getVariantId   = () => this.variantId
    getQuantity    = () => this.quantity
    getTeamMember  = () => this.teamMember
    getSlot        = () => this.slot

    constructor(
        environment: Environment,
        shopId: string,
        locale: string,
        productId: string,
        variantId: string,
        quantity: string,
        teamMember: TeamMember,
        slot: Date
    ){
        this.environment = environment
        this.shopId = shopId
        this.locale = locale
        if(productId ){this.productId  = productId }
        if(variantId ){this.variantId  = variantId }
        if(quantity  ){this.quantity   = quantity  }
        if(teamMember){this.teamMember = teamMember}
        if(slot      ){this.slot       = slot      }
    }

    static init = async () => {
        initListener()
        const payload: any = await getInit()
        return new SesamiExperience(
            payload.environment,
            payload.shopId,
            payload.locale,
            payload.productId,
            payload.variantId,
            payload.quantity,
            payload.teamMember,
            payload.slot
        )
    }
    
    onNext = onNext
    acceptNext = acceptNext
    rejectNext = rejectNext

}
