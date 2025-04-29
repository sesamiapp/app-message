import { getUrlParam } from '../../../helpers'
import { acceptNext, requestHostForInit, listenToHostPageSizeChange, onNext, rejectNext } from '../../../methods/client'
import { CartItem } from '../../../types'

type Props = {
    messageId: string,
    sessionId: string,
    shopId: string,
    locale: string,
    cart: CartItem[]
}

export class ExperienceBookingForm {

    messageId: string
    sessionId: string
    shopId: string
    locale: string
    cart: CartItem[]

    getSessionId = () => this.sessionId
    getShopId    = () => this.shopId
    getLocale    = () => this.locale
    getCart      = () => this.cart

    static init = async () => {
        const messageId = getUrlParam('messageId') ?? ''
        const payload: any = await requestHostForInit(messageId, '1.0.0')
        return new ExperienceBookingForm({
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
        listenToHostPageSizeChange(this.messageId)
    }
    
    onConfirm = (callback: () => void) => onNext(this.messageId, callback)
    acceptConfirm = () => acceptNext(this.messageId)
    rejectConfirm = () => rejectNext(this.messageId)

}
