import type { Ticket } from './../../../domain/Ticket';


export interface TicketUseCase{
    createTicket ( title: string, description: string, author: string) : Promise<Ticket>
    listAll(): Promise<Ticket[]>
}