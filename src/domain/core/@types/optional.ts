/**
 * @exeple 
 * 
 *  type Service {
 * id: string
 * requestAt: Date 
 * requestFor: Date
 * description: string
 * 
 * }
 * 
 * Optional<Service, requestAt>
 * requestAt -> requestAt?
 * 
 **/

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>