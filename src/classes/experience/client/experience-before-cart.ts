import { getUrlParam, initListener } from '../../../helpers'
import { acceptNext, getInit, initPageSizeListener, onNext, rejectNext } from '../../../methods/client'
import { Resource } from '../../../types'

type Props = {
    messageId: string,
    sessionId: string,
    shopId: string,
    locale: string,
    serviceId: string,
    variantId: string,
    quantity: number,
    resources: Resource[],
    timezone: string,
    slot: Date
}

export class ExperienceBeforeCart {

    messageId: string
    sessionId: string
    shopId: string
    locale: string
    serviceId: string
    variantId: string
    quantity: number
    resources: Resource[]
    timezone: string
    slot: Date

    getSessionId = () => this.sessionId
    getShopId    = () => this.shopId
    getLocale    = () => this.locale
    getServiceId = () => this.serviceId
    getVariantId = () => this.variantId
    getQuantity  = () => this.quantity
    getResources = () => this.resources
    getTimezone  = () => this.timezone
    getSlot      = () => this.slot

    static init = async () => {
        initListener('host')
        const messageId = getUrlParam('messageId') ?? ''
        const payload: any = await getInit(messageId)
        return new ExperienceBeforeCart({
            messageId,
            sessionId: payload.sessionId,
            shopId: payload.shopId,
            locale: payload.locale,
            serviceId: payload.serviceId,
            variantId: payload.variantId,
            quantity: payload.quantity,
            resources: payload.resources,
            timezone: payload.timezone,
            slot: payload.slot
        })
    }

    constructor(props: Props){
        this.messageId = props.messageId
        this.sessionId = props.sessionId
        this.shopId    = props.shopId
        this.locale    = props.locale
        this.serviceId = props.serviceId
        this.variantId = props.variantId
        this.quantity  = props.quantity
        this.resources = props.resources
        this.timezone  = props.timezone
        this.slot      = props.slot
        initPageSizeListener(this.messageId)
    }
    
    onConfirm = (callback: () => void) => onNext(this.messageId, callback)
    acceptConfirm = () => acceptNext(this.messageId)
    rejectConfirm = () => rejectNext(this.messageId)

}
