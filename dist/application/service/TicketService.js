import { Ticket } from '../../domain/Ticket';
export class TicketService {
    repository;
    idGenerator;
    constructor(repository, idGenerator) {
        this.repository = repository;
        this.idGenerator = idGenerator;
    }
    async createTicket(title, description, author) {
        const error = Ticket.validate(title, description, author);
        if (error) {
            throw new Error(error);
        }
        const ticket = new Ticket(this.idGenerator.generate(), title.trim(), description.trim(), author.trim(), new Date());
        await this.repository.save(ticket);
        return ticket;
    }
    async listAll() {
        return this.repository.findAll();
    }
}
//# sourceMappingURL=TicketService.js.map