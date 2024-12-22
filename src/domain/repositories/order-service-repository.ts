import { OrderService } from "../entities/order-service";

export interface OrderServiceRepository {
    create(orderService: OrderService): Promise<OrderService>
}