import { getEvent } from '../../helpers'
import { Action, Message } from '../../types'

export const getInit = (messageId: string) => {
    const data: Message = {
        action: getEvent(messageId, Action.INIT)
    }
    window.top?.postMessage(data, '*')
    return new Promise(resolve => {
        window.addEventListener(getEvent(messageId, Action.INIT), (e: any) => {
            resolve(e.detail.event.data.payload)
        })
    })
}
