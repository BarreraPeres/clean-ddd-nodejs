import dayjs from "dayjs"
import { Optional } from "../core/@types/optional"
import { Entity } from "../core/entities/entity"
import { UniqueId } from "../core/entities/unique-id"
import { start } from "repl"



interface OrderServiceProps {
    service_id: UniqueId,
    value: number,
    description: string,
    start_date: Date,
    end_date: Date,
    mechanic_id: UniqueId,
    created_at: Date,
    updated_at?: Date
}

export class OrderService extends Entity<OrderServiceProps> {

    //Accessers
    get description() {
        return this.props.description
    }

    get value() {
        return this.props.value
    }

    get service_id() {
        return this.props.service_id
    }


    get start_date() {
        return this.props.start_date
    }

    get end_date() {
        return this.props.end_date
    }

    get mechanic_id() {
        return this.props.end_date
    }

    get created_at() {
        return this.props.created_at
    }

    get isNew(): boolean {
        return dayjs(this.end_date).isBefore(this.start_date)
    }


    set description(description: string) {
        this.props.description = description
        this.touch()
    }

    //methods
    private time(start_date: Date, end_date: Date) {
        this.props.start_date = start_date
        this.props.end_date = end_date
        this.touch()
    }
    private touch() {
        this.props.updated_at = new Date()
    }




    static create(
        props: Optional<OrderServiceProps, "created_at">,
        id?: UniqueId) {
        const orderSerivce = new OrderService({
            ...props,
            created_at: new Date(),
        }, id)

        return orderSerivce
    }

}
