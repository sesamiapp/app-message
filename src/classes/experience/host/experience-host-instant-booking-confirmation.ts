import { ExperienceHostBase } from './experience-host-base'
import { askNext } from '../../../methods/host'
import { AppTarget } from '../../../types'

export class ExperienceHostInstantBookingConfirmation extends ExperienceHostBase {

    askForDone = () => this.source && askNext(this.messageId, this.source)

    getURL = () => (
        this.getBaseURL() +
        `&target=${AppTarget.EXPERIENCE_INSTANT_BOOKING_FORM}`
    )

}
