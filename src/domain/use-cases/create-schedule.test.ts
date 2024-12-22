import { describe, expect, it } from "vitest";
import { ScheduleRepository } from "../repositories/schedule-repository";
import { Service } from "../entities/service";
import { ScheduleServiceUseCase } from "./create-schedule";

class FakeRepository implements ScheduleRepository {
    private items: Service[] = []
    async create(scheduleService: Service) {
        this.items.push(scheduleService)

        return scheduleService
    }
}

describe("Create Schedule Service Use Case", async () => {
    it("Should be able to create a schedule service", async () => {
        const fakeRepository = new FakeRepository()

        const scheduleServiceUseCase = new ScheduleServiceUseCase(fakeRepository)

        const { scheduleService } = await scheduleServiceUseCase.execute({
            client_id: "1",
            description: "some description of schedule",
            request_at: new Date("1"),
            scheduled_for: new Date("1"),
            status: "1",
        })

        expect(scheduleService.id).toBeTruthy()
        expect(scheduleService.description).toEqual("some description of schedule")

    })
})