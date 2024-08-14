import { Action, Message, Resource } from '../../types'

export const onInit = (callback: (source: MessageEventSource) => void) => {
    window.addEventListener(Action.INIT, (e: any) => {
        callback(e.detail.event.source)
    })
}

export const sendAdminInit = (
    source: MessageEventSource | null,
    shopId: string,
    locale: string,
    extra?: object
) => {
    const data: Message = {
        action: Action.INIT,
        payload: {
            shopId,
            locale,
            extra
        }
    }
    source?.postMessage(data)
}

export const sendExperienceInit = (
    source: MessageEventSource | null,
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
        action: Action.INIT,
        payload: {
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
    source?.postMessage(data)
}
