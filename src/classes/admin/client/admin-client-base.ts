import { getToken, initPageSizeListener } from '../../../methods/client'

export type AdminClientBaseProps = {
    messageId: string,
    shopId: string,
    locale: string
}

export class AdminClientBase {

    protected messageId: string
    private shopId: string
    private locale: string

    getShopId = () => this.shopId
    getLocale = () => this.locale

    constructor(props: AdminClientBaseProps){
        this.messageId = props.messageId
        this.shopId = props.shopId
        this.locale = props.locale
        initPageSizeListener(this.messageId)
    }

    getToken = () => getToken(this.messageId)

}
