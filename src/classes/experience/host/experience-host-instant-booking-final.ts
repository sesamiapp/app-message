import { ExperienceHostBase } from './experience-host-base'
import { askNext } from '../../../methods/app'

export class ExperienceHostInstantBookingFinal extends ExperienceHostBase {

    askForFinish = () => this.source && askNext(this.source)

}
