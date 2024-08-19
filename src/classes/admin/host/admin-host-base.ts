import { onGetToken, onHeightChange, onInit, sendAdminInit, sendToken } from '../../../methods/host'
import { initListener, nanoId } from '../../../helpers'

export type AdminHostBaseProps = {
    url: string
    hmac: string
    token: string
    shopId: string
    locale: string
    extra?: any
    getToken: () => Promise<string | null>
    setHeight?: (height: number) => void
}

export class AdminHostBase {

    protected url: string
    protected hmac: string
    protected token: string
    protected id: string
    protected timestamp: number
    protected source: MessageEventSource | null = null
    protected shopId: string
    protected locale: string
    protected extra?: any

    constructor(props: AdminHostBaseProps){
        
        this.url       = props.url
        this.hmac      = props.hmac
        this.token     = props.token
        this.timestamp = (new Date()).getTime()
        this.id        = nanoId([props.url, props.token, this.timestamp, props.shopId, props.locale], 8)
        this.shopId    = props.shopId
        this.locale    = props.locale
        this.extra     = props.extra

        initListener()

        onInit(this.id, (source: MessageEventSource) => {
            this.source = source
            sendAdminInit(
                this.id,
                this.source,
                this.shopId,
                this.locale,
                this.extra
            )
        })

        onGetToken(this.id, async () => {
            const token = await props.getToken()
            this.source && sendToken(this.id, this.source, token)
        })

        props.setHeight && onHeightChange(this.id, props.setHeight)

    }

    protected getBaseURL = () => (
        `${this.url}` +
        `?hmac=${this.hmac}` +
        `&id=${this.id}` +
        `&time=${this.timestamp}` +
        `&token=${this.token}` +
        `&shopId=${this.shopId}` +
        `&locale=${this.locale}`
    )

}
