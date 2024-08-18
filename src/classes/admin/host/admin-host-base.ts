import { onGetToken, onHeightChange, onInit, sendAdminInit, sendToken } from '../../../methods/host'
import { getUrlParam, initListener } from '../../../helpers'
import { nanoId } from '../../../helpers/nano-id'

export type AdminHostBaseProps = {
    shopId: string
    locale: string
    extra?: object
    getToken: () => Promise<string | null>
    setHeight?: (height: number) => void
}

export class AdminHostBase {

    protected id: string
    protected source: MessageEventSource | null = null
    protected shopId: string
    protected locale: string
    protected extra?: object

    constructor(props: AdminHostBaseProps){
        
        this.id = getUrlParam('id') ?? ''
        this.shopId = props.shopId
        this.locale = props.locale
        this.extra = props.extra

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
