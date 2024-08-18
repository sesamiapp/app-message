import { ExperienceHostBase } from './experience-host-base'
import { askNext } from '../../../methods/host'

export class ExperienceHostInstantBookingConfirmation extends ExperienceHostBase {

    askForFinish = () => this.source && askNext(this.id, this.source)

}
