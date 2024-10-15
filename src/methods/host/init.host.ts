import { getEvent } from '../../helpers'
import { Action, Message, Resource } from '../../types'

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

export const sendExperienceInit = (
    messageId: string,
    source: MessageEventSource | null,
    sessionId: string,
    shopId: string,
    productId: string,
    variantId: string,
    quantity: number,
    resources: Resource[],
    locale: string,
    timezone: string,
    slot: Date,
    extra?: object
) => {
    const data: Message = {
        action: getEvent(messageId, Action.INIT),
        payload: {
            sessionId,
            shopId,
            productId,
            variantId,
            quantity,
            resources,
            locale,
            timezone,
            slot,
            extra
        }
    }
    source?.postMessage(data, { targetOrigin: '*' })
}
