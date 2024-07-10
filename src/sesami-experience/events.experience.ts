import { initListener } from '../utils/listener'

export const onNext = (onNext: (payload: any) => void) => {
    initListener()
    window.addEventListener('ON_NEXT', (event: any) => {
        onNext(event.detail.payload)
    })
}

export const onPrevious = (onPrevious: (payload: any) => void) => {
    initListener()
    window.addEventListener('ON_PREVIOUS', (event: any) => {
        onPrevious(event.detail.payload)
    })
}
