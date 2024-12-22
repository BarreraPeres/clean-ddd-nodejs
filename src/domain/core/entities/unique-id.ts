import { randomUUID } from "crypto"

export class UniqueId {
    private id: string

    get Id() {
        return this.id
    }

    constructor(id?: string) {
        this.id = id ?? randomUUID()
    }
}




// toString() {
//     return this.id
// }

// toId() {
//     return this.id
// }