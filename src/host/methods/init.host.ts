import { Action, Message, TeamMember } from 'utils/app-message/types'

export const onInit = (callback: (source: MessageEventSource) => void) => {
    window.addEventListener(Action.INIT, (e: any) => {
        callback(e.detail.event.source)
    })
}

export const sendAdminInit = (
    source: MessageEventSource | null,
    shopId: string,
    locale: string
) => {
    const data: Message = {
        action: Action.INIT,
        payload: {
            shopId,
            locale
        }
    }
    source?.postMessage(data)
}

export const sendExperienceInit = (
    source: MessageEventSource | null,
    shopId: string,
    locale: string,
    productId: string,
    variantId: string,
    quantity: string,
    teamMember: TeamMember,
    slot: Date
) => {
    const data: Message = {
        action: Action.INIT,
        payload: {
            shopId,
            locale,
            productId,
            variantId,
            quantity,
            teamMember,
            slot
        }
    }
    source?.postMessage(data)
}
