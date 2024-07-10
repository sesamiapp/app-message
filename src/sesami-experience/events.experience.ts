import { Action } from '../types/message.type'
import { initListener } from '../utils/listener'

export const onNext = (callback: () => void) => {
    initListener()
    window.addEventListener(Action.ON_NEXT, () => {
        callback()
    })
}

export const onPrevious = (callback: () => void) => {
    initListener()
    window.addEventListener(Action.ON_PREVIOUS, () => {
        callback()
    })
}
