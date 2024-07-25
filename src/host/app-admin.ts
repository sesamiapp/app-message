import { askNext } from './events.host'
import { onInit, sendAdminInit } from './init.host'
import { onGetToken, sendToken } from './authentication.host'
import { initListener } from '../utils'
import { Environment } from '../types'

export class AppAdmin {

    private iframe: HTMLIFrameElement
    private source: MessageEventSource | null = null

    constructor(iframe: HTMLIFrameElement){
        this.iframe = iframe
        initListener()
    }

    onInit = (callback: () => void) => {
        onInit(source => {
            this.source = source
            callback()
        })
    }

    sendInit = (
        environment: Environment,
        shopId: string,
        locale: string
    ) => sendAdminInit(
        this.source,
        environment,
        shopId,
        locale
    )
    
    onGetToken = onGetToken
    sendToken = sendToken
    askNext = () => askNext(this.iframe)

}
