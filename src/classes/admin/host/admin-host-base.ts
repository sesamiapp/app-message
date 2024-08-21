import { onGetToken, onHeightChange, onInit, sendAdminInit, sendToken } from '../../../methods/host'
import { initListener } from '../../../helpers'

export type AdminHostBaseProps = {
    timestamp: number
    messageId: string
    shopId: string
    locale: string
    extra?: object
    getToken: () => Promise<string | null>
    setHeight?: (height: number) => void
}

export class AdminHostBase {
    
    protected id: string
    protected timestamp: number
    protected source: MessageEventSource | null = null
    protected shopId: string
    protected locale: string
    protected extra?: object

    constructor(props: AdminHostBaseProps){

        this.timestamp = props.timestamp,
        this.id        = props.messageId
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

}
