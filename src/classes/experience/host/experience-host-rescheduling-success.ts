import { askNext, onHeight, onInit, sendExperienceInit } from '../../../methods/host'
import { initListener } from '../../../helpers'
import { Constants } from '../../../constants'
import { AppTarget, Resource } from '../../../types'

type Props = {
    url: string
    messageId: string
    sessionId: string
    shopId: string
    locale: string
    appointmentId: string
    locationId: string
    serviceId: string
    variantId: string
    quantity: number
    resources: Resource[]
    timezone: string
    slot: Date
    onInitEnded: (isInitialized: boolean) => void
    onHeightChange?: (height: number) => void
}

export class ExperienceHostReschedulingSuccess {

    url: string
    messageId: string
    source: MessageEventSource | null = null
    sessionId: string
    shopId: string
    locale: string
    appointmentId: string
    locationId: string
    serviceId: string
    variantId: string
    quantity: number
    resources: Resource[]
    timezone: string
    slot: Date

    isWaitingForClientToLoad = false

    constructor(props: Props){

        this.url           = props.url
        this.messageId     = props.messageId
        this.sessionId     = props.sessionId
        this.shopId        = props.shopId
        this.locale        = props.locale
        this.appointmentId = props.appointmentId
        this.locationId    = props.locationId
        this.serviceId     = props.serviceId
        this.variantId     = props.variantId
        this.quantity      = props.quantity
        this.resources     = props.resources
        this.timezone      = props.timezone
        this.slot          = props.slot

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
                    sessionId:     this.sessionId,
                    shopId:        this.shopId,
                    locale:        this.locale,
                    appointmentId: this.appointmentId,
                    locationId:    this.locationId,
                    serviceId:     this.serviceId,
                    variantId:     this.variantId,
                    quantity:      this.quantity,
                    resources:     this.resources,
                    timezone:      this.timezone,
                    slot:          this.slot
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
