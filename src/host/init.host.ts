import { Action, Message, Environment, TeamMember } from '../types'

export const onInit = (callback: (source: MessageEventSource) => void) => {
    window.addEventListener(Action.INIT, (e: any) => {
        callback(e.detail.event.source)
    })
}

export const sendAdminInit = (
    source: MessageEventSource | null,
    environment: Environment,
    shopId: string,
    locale: string
) => {
    const data: Message = {
        action: Action.INIT,
        payload: {
            environment,
            shopId,
            locale
        }
    }
    source?.postMessage(data)
}

export const sendExperienceInit = (
    source: MessageEventSource | null,
    environment: Environment,
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
            environment,
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
