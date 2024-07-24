import { Action, Message, Environment } from '../types'
import { initListener } from '../utils'

export const onInit = (callback: (event: MessageEvent<any>) => void) => {
    initListener()
    window.addEventListener(Action.INIT, (e: any) => {
        callback(e.detail.event)
    })
}

export const sendInit = (event: MessageEvent<any>, environment: Environment, shopId: string, locale: string) => {
    const data: Message = {
        action: Action.INIT,
        payload: {
            environment,
            shopId,
            locale
        }
    }
    event.source?.postMessage(data)
}
