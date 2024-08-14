import { ExperienceClientBase, ExperienceClientBaseProps } from './experience-client-base'
import { getInit, acceptNext, onNext, rejectNext } from '../../../methods/sesami'
import { initListener } from '../../../helpers'

export class ExperienceClientInstantBookingFinal extends ExperienceClientBase {

    private appointmentId: string

    getAppointmentId = () => this.appointmentId

    constructor(props: ExperienceClientBaseProps & {
        appointmentId: string
    }){
        super(props)
        this.appointmentId = props.appointmentId
    }

    static init = async () => {
        initListener()
        const payload: any = await getInit()
        return new ExperienceClientInstantBookingFinal({
            shopId: payload.shopId,
            productId: payload.productId,
            variantId: payload.variantId,
            quantity: payload.quantity,
            resources: payload.resources,
            locale: payload.locale,
            timezone: payload.timezone,
            slot: payload.slot,
            appointmentId: payload.extra.appointmentId
        })
    }
    
    onFinish = onNext
    acceptFinish = acceptNext
    rejectFinish = rejectNext

}
