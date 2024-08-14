import { onGetToken, onHeightChange, onInit, sendAdminInit, sendToken } from './methods'
import { initListener } from '../utils'

export class AppAdminAppLoaderMain {

    private source: MessageEventSource | null = null
    private shopId: string
    private locale: string

    constructor(
        shopId: string,
        locale: string,
        getToken: () => Promise<string | null>,
        setHeight: (height: number) => void
    ){
        
        this.shopId = shopId
        this.locale = locale

        initListener()

        onInit((source: MessageEventSource) => {
            this.source = source
            sendAdminInit(
                this.source,
                this.shopId,
                this.locale
            )
        })

        onGetToken(async () => {
            const token = await getToken()
            this.source && sendToken(this.source, token)
        })

        onHeightChange(setHeight)

    }

}
