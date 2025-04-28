import { askNext, onHeight, onInit, sendExperienceInit } from '../../../methods/host'
import { initListener } from '../../../helpers'
import { Constants } from '../../../constants'
import { AppTarget, CartItem } from '../../../types'

type Props = {
    url: string
    messageId: string
    sessionId: string
    shopId: string
    locale: string
    cart: CartItem[]
    bookingId: string
    onInitEnded: (isInitialized: boolean) => void
    onHeightChange?: (height: number) => void
}

export class ExperienceHostBookingSuccess {

    url: string
    messageId: string
    source: MessageEventSource | null = null
    sessionId: string
    shopId: string
    locale: string
    cart: CartItem[]
    bookingId: string

    isWaitingForClientToLoad = false

    constructor(props: Props){

        this.url       = props.url
        this.messageId = props.messageId
        this.sessionId = props.sessionId
        this.shopId    = props.shopId
        this.locale    = props.locale
        this.cart      = props.cart
        this.bookingId = props.bookingId

        // Timeout for loading client
        this.isWaitingForClientToLoad = true
        setTimeout(() => {
            if(this.isWaitingForClientToLoad){
                props.onInitEnded(false)
                this.isWaitingForClientToLoad = false
            }
        }, Constants.CLIENT_LOADING_TIMEOUT)

        // Waiting for client
        initListener('client')
        onInit(this.messageId, (source: MessageEventSource) => {

            this.source = source

            // Send the context to client
            sendExperienceInit({
                messageId: this.messageId,
                source: this.source,
                payload: {
                    sessionId: this.sessionId,
                    shopId:    this.shopId,
                    locale:    this.locale,
                    cart:      this.cart,
                    bookingId: this.bookingId
                }
            })
            
            // The client loaded successfully
            if(this.isWaitingForClientToLoad){
                this.isWaitingForClientToLoad = false
                setTimeout(() => {
                    props.onInitEnded(true)
                }, 100)
            }

        })

        props.onHeightChange && onHeight(this.messageId, props.onHeightChange)

    }

    askForConfirm = async () => {
        if(this.source){
            return askNext(this.messageId, this.source)
        }else if(this.isWaitingForClientToLoad){
            return false // do not go to next step if the extension is loading
        }else{
            return true // does not block the client if extension is not loaded
        }
    }

    getURL = () =>
        `${this.url}`                  +
        `?messageId=${this.messageId}` +
        `&sessionId=${this.sessionId}` +
        `&shopId=${this.shopId}`       +
        `&locale=${this.locale}`       +
        `&target=${AppTarget.EXPERIENCE_BOOKING_SUCCESS}`

}
