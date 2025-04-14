import { ExperienceClientBase } from './experience-client-base'
import { getInit, acceptNext, onNext, rejectNext } from '../../../methods/client'
import { getUrlParam, initListener } from '../../../helpers'

export class ExperienceBeforeCart extends ExperienceClientBase{

    static init = async () => {
        initListener('host')
        const messageId = getUrlParam('messageId') ?? ''
        const payload: any = await getInit(messageId)
        return new ExperienceBeforeCart({
            messageId,
            sessionId: payload.sessionId,
            shopId: payload.shopId,
            serviceId: payload.serviceId,
            variantId: payload.variantId,
            quantity: payload.quantity,
            resources: payload.resources,
            locale: payload.locale,
            timezone: payload.timezone,
            slot: payload.slot
        })
    }
    
    onConfirm = (callback: () => void) => onNext(this.messageId, callback)
    acceptConfirm = () => acceptNext(this.messageId)
    rejectConfirm = () => rejectNext(this.messageId)

}
