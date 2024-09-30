import { getEvent } from '../../helpers'
import { Action, Message, Resource } from '../../types'

export const onInit = (id: string, callback: (source: MessageEventSource) => void) => {
    window.addEventListener(getEvent(id, Action.INIT), (e: any) => {
        callback(e.detail.event.source)
    })
}

export const sendAdminInit = (
    id: string,
    source: MessageEventSource | null,
    shopId: string,
    locale: string,
    extra?: object
) => {
    const data: Message = {
        action: getEvent(id, Action.INIT),
        payload: {
            shopId,
            locale,
            extra
        }
    }
    source?.postMessage(data, { targetOrigin: '*' })
}

export const sendExperienceInit = (
    id: string,
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
        action: getEvent(id, Action.INIT),
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
