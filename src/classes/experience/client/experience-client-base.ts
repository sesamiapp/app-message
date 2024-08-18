import { initPageSizeListener } from '../../../methods/client'
import { Resource } from '../../../types'

export type ExperienceClientBaseProps = {
    id: string,
    sessionId: string,
    shopId: string,
    productId: string,
    variantId: string,
    quantity: number,
    resources: Resource[],
    locale: string,
    timezone: string,
    slot: Date
}

export class ExperienceClientBase {

    private id: string
    private sessionId: string
    private shopId: string
    private productId: string
    private variantId: string
    private quantity: number
    private resources: Resource[]
    private locale: string
    private timezone: string
    private slot: Date

    getSessionId = () => this.sessionId
    getShopId    = () => this.shopId
    getProductId = () => this.productId
    getVariantId = () => this.variantId
    getQuantity  = () => this.quantity
    getResources = () => this.resources
    getLocale    = () => this.locale
    getTimezone  = () => this.timezone
    getSlot      = () => this.slot

    constructor(props: ExperienceClientBaseProps){
        this.id        = props.id
        this.sessionId = props.sessionId
        this.shopId    = props.shopId
        this.productId = props.productId
        this.variantId = props.variantId
        this.quantity  = props.quantity
        this.resources = props.resources
        this.locale    = props.locale
        this.timezone  = props.timezone
        this.slot      = props.slot
        initPageSizeListener(props.id)
    }

}
