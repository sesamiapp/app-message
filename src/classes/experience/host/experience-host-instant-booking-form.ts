import { ExperienceHostBase } from './experience-host-base'
import { askNext } from '../../../methods/app'

export class ExperienceHostInstantBookingForm extends ExperienceHostBase{

    askConfirm = () => this.source && askNext(this.source)

}
