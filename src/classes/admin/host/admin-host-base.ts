import { onGetToken, onHeight, onInit, sendAdminInit, sendToken } from '../../../methods/host'
import { initListener } from '../../../helpers'

export type AdminHostBaseProps = {
    messageId: string
    shopId: string
    locale: string
    extra?: object
    getToken: () => Promise<string | null>
    onHeightChange?: (height: number) => void
    onAppLoaded?: () => void
}

export class AdminHostBase {
    
    protected messageId: string
    protected source: MessageEventSource | null = null
    protected shopId: string
    protected locale: string
    protected extra?: object

    constructor(props: AdminHostBaseProps){

        this.messageId = props.messageId
        this.shopId    = props.shopId
        this.locale    = props.locale
        this.extra     = props.extra

        initListener()

        onInit(this.messageId, (source: MessageEventSource) => {
            props.onAppLoaded?.()
            this.source = source
            sendAdminInit(
                this.messageId,
                this.source,
                this.shopId,
                this.locale,
                this.extra
            )
        })

        onGetToken(this.messageId, async () => {
            const token = await props.getToken()
            this.source && sendToken(this.messageId, this.source, token)
        })

        props.onHeightChange && onHeight(this.messageId, props.onHeightChange)

    }

}
