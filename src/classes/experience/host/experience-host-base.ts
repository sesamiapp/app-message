import { onHeightChange, onInit, sendExperienceInit } from '../../../methods/host'
import { getUrlParam, initListener } from '../../../helpers'
import { Resource } from '../../../types'

export type ExperienceHostBaseProps = {
    url: string
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
    setHeight?: (height: number) => void
}

export class ExperienceHostBase {

    protected url: string
    protected id: string
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

    constructor(props: ExperienceHostBaseProps){

        this.id = getUrlParam('id') ?? ''
        this.url = props.url
        this.sessionId = props.sessionId
        this.shopId = props.shopId
        this.productId = props.productId
        this.variantId = props.variantId
        this.quantity = props.quantity
        this.resources = props.resources
        this.locale = props.locale
        this.timezone = props.timezone
        this.slot = props.slot

        initListener()

        onInit(this.id, (source: MessageEventSource) => {
            this.source = source
            sendExperienceInit(
                this.id,
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

        props.setHeight && onHeightChange(this.id, props.setHeight)

    }

    protected getBaseURL = () => (
        `${this.url}` +
        `?id=${this.id}` +
        `&sessionId=${this.sessionId}` +
        `&shopId=${this.shopId}` +
        `&productId=${this.productId}` +
        `&variantId=${this.variantId}` +
        `&quantity=${this.quantity}` +
        `&resources=${JSON.stringify(this.resources.map(r => r.id))}` +
        `&locale=${this.locale}` +
        `&timezone=${this.timezone}` +
        `&slot=${this.slot.getTime()}`
    )

}
