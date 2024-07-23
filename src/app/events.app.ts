import { Action } from '../types'
import { initListener } from '../utils/listener'

export const onNext = (callback: () => void) => {
    initListener()
    window.addEventListener(Action.ON_NEXT, () => callback())
}

export const onPrevious = (callback: () => void) => {
    initListener()
    window.addEventListener(Action.ON_PREVIOUS, () => callback())
}
