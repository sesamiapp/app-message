import { getToken, initPageSizeListener } from '../../../methods/client'
import { isTokenExpired } from '../../../helpers'

export type AdminClientBaseProps = {
    id: string,
    shopId: string,
    locale: string
}

export class AdminClientBase {

    protected id: string
    private shopId: string
    private locale: string
    private token: string | null = null

    getShopId = () => this.shopId
    getLocale = () => this.locale

    constructor(props: AdminClientBaseProps){
        this.id = props.id
        this.shopId = props.shopId
        this.locale = props.locale
        initPageSizeListener(this.id)
    }

    getToken = async (): Promise<string | null> => {
        if(this.token && !isTokenExpired(this.token)){
            return this.token
        }else{
            const token = await getToken(this.id)
            this.token = token
            return this.token
        }
    }

}
