import { getEvent } from '../../helpers'
import { Action, Message } from '../../types'

export const onInit = (messageId: string, callback: (source: MessageEventSource) => void) => {
    window.addEventListener(getEvent(messageId, Action.INIT), (e: any) => {
        callback(e.detail.event.source)
    })
}

export const sendAdminInit = (
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

export const sendExperienceInit = (attr: {
    version: string,
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
