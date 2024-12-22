import { Service } from "../entities/service";
import { ScheduleRepository } from "../repositories/schedule-repository";

interface ScheduleServiceUseCaseRequest {
    request_at: Date
    scheduled_for: Date
    status: string
    description: string
    updated_at?: Date
    client_id: string
}

interface ScheduleServiceUseCaseResponse {
    scheduleService: Service
}

export class ScheduleServiceUseCase {
    constructor(public SheduleServiceRespository: ScheduleRepository) { }

    async execute({
        client_id,
        description,
        scheduled_for,
        request_at,
        status,
        updated_at
    }: ScheduleServiceUseCaseRequest): Promise<ScheduleServiceUseCaseResponse> {
        const scheduleService = new Service({
            client_id,
            description,
            scheduled_for,
            request_at,
            status,
            updated_at
        })

        return { scheduleService }
    }
} 