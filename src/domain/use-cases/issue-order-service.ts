import { UniqueId } from "../core/entities/unique-id"
import { OrderService } from "../entities/order-service"
import { OrderServiceRepository } from "../repositories/order-service-repository"

interface IssueOrderServiceUseCaseRequest {
    description: string
    value: number
    service_id: UniqueId
    mechanic_id: UniqueId
    start_date: Date,
    end_date: Date,
}

interface IssueOrderServiceUseCaseResponse {
    orderService: OrderService
}

export class IssueOrderServiceUseCase {
    constructor(private orderServiceRepository: OrderServiceRepository) { }

    async execute({
        description,
        value,
        service_id,
        end_date,
        start_date,
        mechanic_id
    }: IssueOrderServiceUseCaseRequest): Promise<IssueOrderServiceUseCaseResponse> {
        const orderService = OrderService.create({
            value,
            start_date,
            end_date,
            description,
            mechanic_id,
            service_id,

        })
        await this.orderServiceRepository.create(orderService)



        return { orderService }
    }


}

