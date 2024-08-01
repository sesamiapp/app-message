import { askNext, onGetToken, onHeightChange, onInit, sendExperienceInit, sendToken } from './methods'
import { initListener } from '../utils'
import { TeamMember } from '../types'

export class AppExperienceIbForm {

    source: MessageEventSource | null = null
    shopId: string
    locale: string
    productId: string
    variantId: string
    quantity: string
    teamMember: TeamMember
    slot: Date

    constructor(
        shopId: string,
        locale: string,
        productId: string,
        variantId: string,
        quantity: string,
        teamMember: TeamMember,
        slot: Date,
        getToken: () => Promise<string | null>,
        setHeight: (height: number) => void
    ){

        this.shopId = shopId
        this.locale = locale
        this.productId = productId
        this.variantId = variantId
        this.quantity = quantity
        this.teamMember = teamMember
        this.slot = slot

        initListener()

        onInit((source: MessageEventSource) => {
            this.source = source
            sendExperienceInit(
                this.source,
                this.shopId,
                this.locale,
                this.productId,
                this.variantId,
                this.quantity,
                this.teamMember,
                this.slot
            )
        })

        onGetToken(async () => {
            const token = await getToken()
            this.source && sendToken(this.source, token)
        })

        onHeightChange(setHeight)

    }

    askNext = () => this.source && askNext(this.source)

}
