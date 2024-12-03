export const initListener = () => {
    if(!window.onmessage){
        window.onmessage = (event: MessageEvent<any>) => {
            console.info('1.0.75', event.data.action, event)
            window.dispatchEvent(new CustomEvent(event.data.action, {
                detail: {
                    event
                }
            }))
        }
    }
}
