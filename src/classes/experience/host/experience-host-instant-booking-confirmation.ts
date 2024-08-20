import { ExperienceHostBase } from './experience-host-base'
import { askNext } from '../../../methods/host'
import { AppTarget } from '../../../types'

export class ExperienceHostInstantBookingConfirmation extends ExperienceHostBase {

    askForFinish = () => this.source && askNext(this.id, this.source)

    getURL = () => (
        this.getBaseURL() +
        `&target=${AppTarget.EXPERIENCE_INSTANT_BOOKING_FORM}`
    )

}
