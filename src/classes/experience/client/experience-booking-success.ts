import { getUrlParam } from '../../../helpers'
import { acceptNext, requestHostForInit, listenToHostPageSizeChange, onNext, rejectNext } from '../../../methods/client'
import { CartItem } from '../../../types'

type Props = {
    messageId: string,
    sessionId: string,
    shopId: string,
    locale: string,
    cart: CartItem[]
    bookingId: string
}

export class ExperienceBookingSuccess {

    messageId: string
    sessionId: string
    shopId: string
    locale: string
    cart: CartItem[]
    bookingId: string

    getSessionId = () => this.sessionId
    getShopId    = () => this.shopId
    getLocale    = () => this.locale
    getCart      = () => this.cart
    getBookingId = () => this.bookingId

    static init = async () => {
        const messageId = getUrlParam('messageId') ?? ''
        const payload: any = await requestHostForInit(messageId)
        return new ExperienceBookingSuccess({
            messageId,
            sessionId: payload.sessionId,
            shopId: payload.shopId,
            locale: payload.locale,
            cart: payload.cart,
            bookingId: payload.bookingId
        })
    }

    constructor(props: Props){
        this.messageId = props.messageId
        this.sessionId = props.sessionId
        this.shopId    = props.shopId
        this.locale    = props.locale
        this.cart      = props.cart
        this.bookingId = props.bookingId
        listenToHostPageSizeChange(this.messageId)
    }
    
    onConfirm = (callback: () => void) => onNext(this.messageId, callback)
    acceptConfirm = () => acceptNext(this.messageId)
    rejectConfirm = () => rejectNext(this.messageId)

}
