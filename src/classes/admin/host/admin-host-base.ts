import { onGetToken, onHeightChange, onInit, sendAdminInit, sendToken } from '../../../methods/host'
import { initListener } from '../../../helpers'
import { nanoId } from '../../../helpers/nano-id'

export type AdminHostBaseProps = {
    shopId: string
    locale: string
    extra?: object
    getToken: () => Promise<string | null>
    setHeight?: (height: number) => void
}

export class AdminHostBase {

    private id: string
    private source: MessageEventSource | null = null
    protected shopId: string
    protected locale: string
    protected extra?: object

    constructor(props: AdminHostBaseProps){
        
        this.shopId = props.shopId
        this.locale = props.locale
        this.extra = props.extra

        // this.id = nanoId(`${this.shopId}${(new Date()).getTime()}${this.locale}`, 8)
        this.id = '' //todo: get it from the url

        initListener()

        onInit(this.id, (source: MessageEventSource) => {
            this.source = source
            sendAdminInit(
                this.source,
                this.shopId,
                this.locale,
                this.extra
            )
        })

        onGetToken(this.id, async () => {
            const token = await props.getToken()
            this.source && sendToken(this.source, token)
        })

        props.setHeight && onHeightChange(this.id, props.setHeight)

    }

}
