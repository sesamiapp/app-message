import { getInit, acceptNext, onNext, rejectNext, initPageSizeListener } from './methods'
import { TeamMember } from '../types'
import { initListener } from '../utils'

export class SesamiExperienceInstantBookingFormBottom {

    private shopId: string
    private locale: string
    private productId: string | null = null
    private variantId: string | null = null
    private quantity: string | null = null
    private teamMember: TeamMember | null = null
    private slot: Date | null = null

    getShopId     = () => this.shopId
    getLocale     = () => this.locale
    getProductId  = () => this.productId
    getVariantId  = () => this.variantId
    getQuantity   = () => this.quantity
    getTeamMember = () => this.teamMember
    getSlot       = () => this.slot

    constructor(
        shopId: string,
        locale: string,
        productId: string,
        variantId: string,
        quantity: string,
        teamMember: TeamMember,
        slot: Date
    ){
        this.shopId     = shopId
        this.locale     = locale
        this.productId  = productId
        this.variantId  = variantId
        this.quantity   = quantity
        this.teamMember = teamMember
        this.slot       = slot
        initPageSizeListener()
    }

    static init = async () => {
        initListener()
        const payload: any = await getInit()
        return new SesamiExperienceInstantBookingFormBottom(
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
