export const initListener = () => {
    if(!window.onmessage){
        window.onmessage = (event: MessageEvent<any>) => {
            window.dispatchEvent(new CustomEvent(event.data.action, {
                detail: {
                    event
                }
            }))
        }
    }
}
