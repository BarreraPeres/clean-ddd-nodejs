import { Entity } from "../core/entities/entity"
import { UniqueId } from "../core/entities/unique-id"

interface MechanicProps {
    name: string
}
export class Mechanic extends Entity<MechanicProps> {
    static create(props: MechanicProps, id?: UniqueId) {
        const mechanic = new Mechanic({
            ...props
        }, id)

        return mechanic
    }
}