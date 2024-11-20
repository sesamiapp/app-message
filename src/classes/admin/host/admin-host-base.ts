import { onGetToken, onHeight, onInit, sendAdminInit, sendToken } from '../../../methods/host'
import { initListener } from '../../../helpers'
import { Constants } from '../../../constants'

export type AdminHostBaseProps = {
    messageId: string
    shopId: string
    locale: string
    extra?: object
    onInitEnded: (isInitialized: boolean) => void
    getToken: () => Promise<string | null>
    onHeightChange?: (height: number) => void
}

export class AdminHostBase {
    
    protected messageId: string
    protected source: MessageEventSource | null = null
    protected shopId: string
    protected locale: string
    protected extra?: object

    private isWaitingForClientToLoad = false

    constructor(props: AdminHostBaseProps){

        this.messageId = props.messageId
        this.shopId    = props.shopId
        this.locale    = props.locale
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

            // Send the context to client
            sendAdminInit(
                this.messageId,
                this.source,
                this.shopId,
                this.locale,
                this.extra
            )
            
            // The client loaded successfully
            if(this.isWaitingForClientToLoad){
                props.onInitEnded(true)
                this.isWaitingForClientToLoad = false
            }
            
        })

        onGetToken(this.messageId, async () => {
            const token = await props.getToken()
            this.source && sendToken(this.messageId, this.source, token)
        })

        props.onHeightChange && onHeight(this.messageId, props.onHeightChange)

    }

}
