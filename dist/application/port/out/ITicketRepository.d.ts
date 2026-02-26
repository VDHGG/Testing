import type { Ticket } from './../../../domain/Ticket';
export interface ITicketRepository {
    save(ticket: Ticket): Promise<void>;
    findAll(): Promise<Ticket[]>;
}
//# sourceMappingURL=ITicketRepository.d.ts.map