import type { IIdGenerator } from '../port/outbound/IIdGenerator';
import type { TicketUseCase } from "../port/in/TicketUseCase";
import type { ITicketRepository } from "../port/outbound/ITicketRepository";
import { Ticket } from '../../domain/Ticket';
export declare class TicketService implements TicketUseCase {
    private readonly repository;
    private readonly idGenerator;
    constructor(repository: ITicketRepository, idGenerator: IIdGenerator);
    createTicket(title: string, description: string, author: string): Promise<Ticket>;
    listAll(): Promise<Ticket[]>;
}
//# sourceMappingURL=TicketService.d.ts.map