export class InMemory {
    tickets = new Map();
    async save(ticket) {
        this.tickets.set(ticket.id, ticket);
    }
    async findAll() {
        return Array.from(this.tickets.values());
    }
}
//# sourceMappingURL=InMemory.js.map