import { Optional } from "../core/@types/optional"
import { Entity } from "../core/entities/entity"
import { UniqueId } from "../core/entities/unique-id"

interface ServiceProps {
    client_id: string,
    request_at: Date,
    scheduled_for: Date,
    status: string,
    description: string
    updated_at?: Date
}

export class Service extends Entity<ServiceProps> {
    //Accessers
    get client_id() {
        return this.props.client_id
    }

    get request_at() {
        return this.props.request_at
    }

    get scheduled_for() {
        return this.props.scheduled_for
    }

    get status() {
        return this.props.status
    }

    get description() {
        return this.props.description
    }

    set scheduled_for(scheduled_for: Date) {
        this.props.scheduled_for = scheduled_for
        this.touch()
    }

    set description(description: string) {
        this.props.description = description
        this.touch()
    }

    private touch() {
        this.props.updated_at = new Date()
    }

    constructor(props: Optional<ServiceProps, "request_at" | "status">, id?: UniqueId) {
        super({ ...props, status: props.status ?? "PEDING", request_at: new Date() })
    }
}


