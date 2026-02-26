import type { ITicketRepository } from "../../application/port/outbound/ITicketRepository";
import type { Ticket } from "../../domain/Ticket";

export class InMemory implements ITicketRepository{
    private readonly tickets = new Map<string, Ticket>()

    async save(ticket: Ticket): Promise<void> {
        this.tickets.set(ticket.id, ticket)
    }

    async findAll(): Promise<Ticket[]> {
        return Array.from(this.tickets.values())
    }
}