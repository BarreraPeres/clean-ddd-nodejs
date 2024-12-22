import { Mechanic } from "./mechanic"
import { Entity } from "../core/entities/entity"
import { UniqueId } from "../core/entities/unique-id"
import { Optional } from "../core/@types/optional"

interface WorkshopProps {
    name: string
    latitude: number
    longitude: number
    mechanic: Mechanic[]
    created_at: Date
}

export class Workshop extends Entity<WorkshopProps> {
    constructor(props: Optional<WorkshopProps, "created_at">, id?: UniqueId) {
        super({ ...props, created_at: new Date() }, id)
    }
}