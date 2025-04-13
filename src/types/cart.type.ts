import { Resource } from './resource.type'

export type CartItem = {
    serviceId: string
    variantId: string
    quantity: number
    resources: Resource[]
    timezone: string
    slot: Date
    reservationId: string | null
}
