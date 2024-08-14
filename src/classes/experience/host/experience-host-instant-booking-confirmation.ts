import { ExperienceHostBase } from './experience-host-base'
import { askNext } from '../../../methods/app'

export class ExperienceHostInstantBookingConfirmation extends ExperienceHostBase {

    askForFinish = () => this.source && askNext(this.source)

}
