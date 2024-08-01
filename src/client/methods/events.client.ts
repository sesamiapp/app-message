import { Action, Message } from '../../types'

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

export const rejectNext = () => {
    const data: Message = {
        action: Action.NEXT,
        payload: {
            isAccepted: false
        }
    }
    window.top?.postMessage(data)
}

export const initPageSizeListener = () => {
    const resizeObserver = new ResizeObserver(entries => {
        const data: Message = {
            action: Action.HEIGHT_CHANGE,
            payload: {
                height: entries[0].target.clientHeight
            }
        }
        window.top?.postMessage(data)
    })
    resizeObserver.observe(document.body)
}
