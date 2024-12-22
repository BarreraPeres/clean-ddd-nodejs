import { Service } from "../entities/service";

export interface ScheduleRepository {
    create(scheduleService: Service): Promise<any>
}