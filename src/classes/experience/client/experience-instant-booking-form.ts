import { getUrlParam, initListener } from '../../../helpers'
import { acceptNext, getInit, initPageSizeListener, onNext, rejectNext } from '../../../methods/client'
import { CartItem } from '../../../types'

type Props = {
    messageId: string,
    sessionId: string,
    shopId: string,
    locale: string,
    cart: CartItem[]
}

export class ExperienceInstantBookingForm {

    protected messageId: string
    private sessionId: string
    private shopId: string
    private locale: string
    private cart: CartItem[]

    getSessionId = () => this.sessionId
    getShopId    = () => this.shopId
    getLocale    = () => this.locale
    getCart      = () => this.cart

    static init = async () => {
        initListener('host')
        const messageId = getUrlParam('messageId') ?? ''
        const payload: any = await getInit(messageId)
        return new ExperienceInstantBookingForm({
            messageId,
            sessionId: payload.sessionId,
            shopId: payload.shopId,
            locale: payload.locale,
            cart: payload.cart
        })
    }

    constructor(props: Props){
        this.messageId = props.messageId
        this.sessionId = props.sessionId
        this.shopId    = props.shopId
        this.locale    = props.locale
        this.cart      = props.cart
        initPageSizeListener(this.messageId)
    }
    
    onConfirm = (callback: () => void) => onNext(this.messageId, callback)
    acceptConfirm = () => acceptNext(this.messageId)
    rejectConfirm = () => rejectNext(this.messageId)

}
