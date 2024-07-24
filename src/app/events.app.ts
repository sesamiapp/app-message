import { Action, Message } from '../types'

export const onNext = (callback: () => void) => {
    window.addEventListener(Action.NEXT, () => callback())
}

export const acceptNext = () => {
    const data: Message = {
        action: Action.NEXT,
        payload: {
            isAccepted: true
        }
    }
    window.top?.postMessage(data)
}

export const abortNext = () => {
    const data: Message = {
        action: Action.NEXT,
        payload: {
            isAccepted: false
        }
    }
    window.top?.postMessage(data)
}
