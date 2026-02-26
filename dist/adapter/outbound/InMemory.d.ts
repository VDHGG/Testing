import type { ITicketRepository } from "../../application/port/outbound/ITicketRepository";
import type { Ticket } from "../../domain/Ticket";
export declare class InMemory implements ITicketRepository {
    private readonly tickets;
    save(ticket: Ticket): Promise<void>;
    findAll(): Promise<Ticket[]>;
}
//# sourceMappingURL=InMemory.d.ts.map