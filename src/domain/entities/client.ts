import { Entity } from "../core/entities/entity"
import { UniqueId } from "../core/entities/unique-id"


interface ClientProps {
    name: string
}

export class Client extends Entity<ClientProps> {
    static create(
        props: ClientProps,
        id?: UniqueId,
    ) {
        const client = new Client({
            ...props
        }, id)
        return client
    }
}