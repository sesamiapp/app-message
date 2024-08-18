import { ExperienceClientBase } from './experience-client-base'
import { getInit, acceptNext, onNext, rejectNext } from '../../../methods/client'
import { getUrlParam, initListener } from '../../../helpers'

export class ExperienceClientInstantBookingForm extends ExperienceClientBase{

    static init = async () => {
        initListener()
        const id = getUrlParam('id') ?? ''
        const payload: any = await getInit(id)
        return new ExperienceClientInstantBookingForm({
            id,
            sessionId: payload.sessionId,
            shopId: payload.shopId,
            productId: payload.productId,
            variantId: payload.variantId,
            quantity: payload.quantity,
            resources: payload.resources,
            locale: payload.locale,
            timezone: payload.timezone,
            slot: payload.slot
        })
    }
    
    onConfirm = onNext
    acceptConfirm = acceptNext
    rejectConfirm = rejectNext

}
