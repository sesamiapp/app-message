import { getEvent, initWindowMessageListener } from '../../helpers'
import { Action, Message } from '../../types'

export const listenForClientInitRequest = (
    messageId: string,
    callback: (source: MessageEventSource, version: string) => void
) => {
    initWindowMessageListener()
    window.addEventListener(getEvent(messageId, Action.INIT), (e: any) => {
        callback(e.detail.event.source, e.detail.event.data.payload.version ?? '0.1.0')
    })
}

export const respondAdminClientInitRequest = (
    messageId: string,
    source: MessageEventSource | null,
    shopId: string,
    locale: string,
    extra?: object
) => {
    const data: Message = {
        action: getEvent(messageId, Action.INIT),
        payload: {
            shopId,
            locale,
            extra
        }
    }
    source?.postMessage(data, { targetOrigin: '*' })
}

export const respondExperienceClientInitRequest = (attr: {
    messageId: string,
    source: MessageEventSource | null,
    payload: object
}) => {
    const data: Message = {
        action: getEvent(attr.messageId, Action.INIT),
        payload: attr.payload
    }
    attr.source?.postMessage(data, { targetOrigin: '*' })
}
