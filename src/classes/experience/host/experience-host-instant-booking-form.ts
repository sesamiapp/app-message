import { ExperienceHostBase } from './experience-host-base'
import { askNext } from '../../../methods/host'

export class ExperienceHostInstantBookingForm extends ExperienceHostBase{

    askForConfirm = () => this.source && askNext(this.id, this.source)

}
