import { askNext } from './events.host'
import { onInit, sendAdminInit } from './init.host'
import { onGetToken, sendToken } from './authentication.host'
import { initListener } from '../utils'
import { AdminTarget } from '../types'

export class AppAdmin {

    private iframe: HTMLIFrameElement
    private target: AdminTarget
    private shopId: string
    private locale: string
    private source: MessageEventSource | null = null

    constructor(
        iframe: HTMLIFrameElement,
        target: AdminTarget,
        shopId: string,
        locale: string,
        getToken: () => Promise<string>
    ){
        
        this.iframe = iframe
        this.target = target,
        this.shopId = shopId,
        this.locale = locale

        initListener()

        onInit(source => {
            this.source = source
            sendAdminInit(
                this.source,
                this.target,
                this.shopId,
                this.locale
            )
        })

        onGetToken(async () => {
            const token = await getToken()
            this.source && sendToken(this.source, token)
        })

    }
    
    askNext = () => askNext(this.iframe)

}
