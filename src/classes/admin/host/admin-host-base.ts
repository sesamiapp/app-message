import { onGetToken, onHeightChange, onInit, sendAdminInit, sendToken } from '../../../methods/app'
import { initListener } from '../../../helpers'

export type AdminHostBaseProps = {
    shopId: string
    locale: string
    extra?: object
    getToken: () => Promise<string | null>
    setHeight?: (height: number) => void
}

export class AdminHostBase {

    protected source: MessageEventSource | null = null
    protected shopId: string
    protected locale: string
    protected extra?: object

    constructor(props: AdminHostBaseProps){
        
        this.shopId = props.shopId
        this.locale = props.locale
        this.extra = props.extra

        initListener()

        onInit((source: MessageEventSource) => {
            this.source = source
            sendAdminInit(
                this.source,
                this.shopId,
                this.locale,
                this.extra
            )
        })

        onGetToken(async () => {
            const token = await props.getToken()
            this.source && sendToken(this.source, token)
        })

        props.setHeight && onHeightChange(props.setHeight)

    }

}
