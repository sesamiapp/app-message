export const initListener = (_side: 'host' | 'client') => {
    if(!window.onmessage){
        window.onmessage = (event: MessageEvent<any>) => {
            // console.info(side, event.data.action, event)
            window.dispatchEvent(new CustomEvent(event.data.action, {
                detail: {
                    event
                }
            }))
        }
    }
}
