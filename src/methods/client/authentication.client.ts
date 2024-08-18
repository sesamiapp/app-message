import { getEvent } from '../../helpers'
import { Action, Message } from '../../types'

export const getToken = (id: string): Promise<string | null> => {
    const data: Message = {
        action: getEvent(id, Action.TOKEN),
        payload: null
    }
    window.top?.postMessage(data)
    return new Promise(resolve => {
        window.addEventListener(getEvent(id, Action.TOKEN), (e: any) => {
            resolve(e.detail.event.data.payload.token as string | null)
        })
    })
}
