import { onHeight, onInit, sendExperienceInit } from '../../../methods/host'
import { initListener } from '../../../helpers'
import { Resource } from '../../../types'
import { Constants } from '../../../constants'

export type ExperienceHostBaseProps = {
    url: string
    messageId: string
    sessionId: string
    shopId: string
    productId: string
    variantId: string
    quantity: number
    resources: Resource[]
    locale: string
    timezone: string
    slot: Date
    extra?: object
    onInitEnded: (isInitialized: boolean) => void
    onHeightChange?: (height: number) => void
}

export class ExperienceHostBase {

    protected url: string
    protected messageId: string
    protected source: MessageEventSource | null = null
    protected sessionId: string
    protected shopId: string
    protected productId: string
    protected variantId: string
    protected quantity: number
    protected resources: Resource[]
    protected locale: string
    protected timezone: string
    protected slot: Date
    protected extra?: object

    protected isWaitingForClientToLoad = false

    constructor(props: ExperienceHostBaseProps){

        this.url       = props.url
        this.messageId = props.messageId
        this.sessionId = props.sessionId
        this.shopId    = props.shopId
        this.productId = props.productId
        this.variantId = props.variantId
        this.quantity  = props.quantity
        this.resources = props.resources
        this.locale    = props.locale
        this.timezone  = props.timezone
        this.slot      = props.slot
        this.extra     = props.extra

        // Timeout for loading client
        this.isWaitingForClientToLoad = true
        setTimeout(() => {
            if(this.isWaitingForClientToLoad){
                props.onInitEnded(false)
                this.isWaitingForClientToLoad = false
            }
        }, Constants.CLIENT_LOADING_TIMEOUT)

        // Waiting for client
        initListener()
        onInit(this.messageId, (source: MessageEventSource) => {

            this.source = source
            
            // Client loaded successfully
            if(this.isWaitingForClientToLoad){
                props.onInitEnded(true)
                this.isWaitingForClientToLoad = false
            }

            // Send the context to client
            sendExperienceInit(
                this.messageId,
                this.source,
                this.sessionId,
                this.shopId,
                this.productId,
                this.variantId,
                this.quantity,
                this.resources,
                this.locale,
                this.timezone,
                this.slot,
                this.extra
            )

        })

        props.onHeightChange && onHeight(this.messageId, props.onHeightChange)

    }

    protected getBaseURL = () => (
        `${this.url}` +
        `&messageId=${this.messageId}` +
        `&sessionId=${this.sessionId}` +
        `&shopId=${this.shopId}` +
        `&productId=${this.productId}` +
        `&variantId=${this.variantId}` +
        `&quantity=${this.quantity}` +
        `&resources=${JSON.stringify(this.resources.map(resource => resource.id))}` +
        `&locale=${this.locale}` +
        `&timezone=${this.timezone}` +
        `&slot=${this.slot.getTime()}`
    )

}
