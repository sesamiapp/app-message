import { getEvent } from '../../helpers'
import { Action, Message } from '../../types'

export const getInit = (id: string) => {
    const data: Message = {
        action: getEvent(id, Action.INIT)
    }
    window.top?.postMessage(data, '*')
    return new Promise(resolve => {
        window.addEventListener(getEvent(id, Action.INIT), (e: any) => {
            resolve(e.detail.event.data.payload)
        })
    })
}
