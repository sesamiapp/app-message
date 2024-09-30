import { ExperienceClientBase, ExperienceClientBaseProps } from './experience-client-base'
import { getInit, acceptNext, onNext, rejectNext } from '../../../methods/client'
import { getUrlParam, initListener } from '../../../helpers'

export class ExperienceClientInstantBookingConfirmation extends ExperienceClientBase {

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
        const id = getUrlParam('id') ?? ''
        const payload: any = await getInit(id)
        return new ExperienceClientInstantBookingConfirmation({
            id,
            sessionId: payload.sessionId,
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
    
    onDone = (callback: () => void) => onNext(this.id, callback)
    acceptDone = () => acceptNext(this.id)
    rejectDone = () => rejectNext(this.id)

}
