import { Resource } from './resource.type'

export type Appointment = {
    
    id: string
    datetime: string
    
    serviceId: string | null
    variantId: string
    duration: number
    quantity: number

    resources: Resource[]

    orderId: string
    orderName: string | null
    price: number
    currency: string

}
