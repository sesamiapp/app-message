import { getEvent, initWindowMessageListener } from '../../helpers'
import { Action, Message } from '../../types'

export const requestHostForInit = (messageId: string, version: string) => {
    initWindowMessageListener()
    const data: Message = {
        action: getEvent(messageId, Action.INIT),
        payload: {
            version
        }
    }
    window.top?.postMessage(data, '*')
    return new Promise(resolve => {
        window.addEventListener(getEvent(messageId, Action.INIT), (e: any) => {
            resolve(e.detail.event.data.payload)
        })
    })
}

export const listenToHostPageSizeChange = (messageId: string) => {
    const resizeObserver = new ResizeObserver(entries => {
        const data: Message = {
            action: getEvent(messageId, Action.HEIGHT),
            payload: {
                height: entries[0].target.clientHeight
            }
        }
        window.top?.postMessage(data, '*')
    })
    resizeObserver.observe(document.body)
}
