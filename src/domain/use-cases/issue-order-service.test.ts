import { describe, expect, it } from "vitest"
import { IssueOrderServiceUseCase } from "./issue-order-service"
import { OrderServiceRepository } from "../repositories/order-service-repository"
import { OrderService } from "../entities/order-service"
import { UniqueId } from "../core/entities/unique-id"

class fakeRepository implements OrderServiceRepository {
    private items: OrderService[] = []

    async create(orderService: OrderService) {
        this.items.push(orderService)

        return orderService
    }
}

describe("Issue Order Service", async () => {
    it("should be able to issue a new order service", async () => {
        const inMemoryRepository = new fakeRepository()
        const issueOrderService = new IssueOrderServiceUseCase(inMemoryRepository)

        const { orderService } = await issueOrderService.execute({
            value: 100,
            end_date: new Date("22/04/2000"),
            start_date: new Date("22/04/2000"),
            description: "some description",
            mechanic_id: new UniqueId(),
            service_id: new UniqueId()
        })

        expect(orderService.id).toBeDefined()
        expect(orderService.description).toEqual("some description")
    })
})
