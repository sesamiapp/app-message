import { Action, Message } from '../../types'

export const getToken = (): Promise<string | null> => {
    const data: Message = {
        action: Action.TOKEN,
        payload: null
    }
    window.top?.postMessage(data)
    return new Promise(resolve => {
        window.addEventListener(Action.TOKEN, (e: any) => {
            resolve(e.detail.event.data.payload.token as string | null)
        })
    })
}
