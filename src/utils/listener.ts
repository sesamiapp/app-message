export const initListener = () => {
    if(!window.onmessage){
        window.onmessage = event => {
            window.dispatchEvent(new CustomEvent(event.data.action, {
                detail: {
                    payload: event.data.payload
                }
            }))
        }
    }
}
