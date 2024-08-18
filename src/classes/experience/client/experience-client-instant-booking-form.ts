import { ExperienceClientBase } from './experience-client-base'
import { getInit, acceptNext, onNext, rejectNext } from '../../../methods/client'
import { initListener } from '../../../helpers'

export class ExperienceClientInstantBookingForm extends ExperienceClientBase{

    static init = async () => {
        initListener()
        const payload: any = await getInit()
        return new ExperienceClientInstantBookingForm({
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
