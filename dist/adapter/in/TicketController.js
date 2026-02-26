export class TicketController {
    useCase;
    constructor(useCase) {
        this.useCase = useCase;
        this.createTicket = this.createTicket.bind(this);
        this.listTickets = this.listTickets.bind(this);
    }
    async createTicket(req, res) {
        try {
            const { title, description, author } = req.body;
            const ticket = await this.useCase.createTicket(title, description, author);
            res.status(201).json(ticket);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
    async listTickets(_req, res) {
        try {
            const tickets = await this.useCase.listAll();
            res.json(tickets);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
}
//# sourceMappingURL=TicketController.js.map