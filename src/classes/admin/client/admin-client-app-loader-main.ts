import { AdminClientBase } from './admin-client-base'
import { getInit, navBack, showNotification } from '../../../methods/client'
import { getUrlParam, initListener } from '../../../helpers'

export class AdminClientAppLoaderMain extends AdminClientBase{
    
    static init = async () => {
        initListener()
        const id = getUrlParam('id') ?? ''
        const payload: any = await getInit(id)
        return new AdminClientAppLoaderMain({
            id,
            shopId: payload.shopId,
            locale: payload.locale
        })
    }

    showNotification = showNotification
    navBack = navBack

}
