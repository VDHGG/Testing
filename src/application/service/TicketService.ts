import type { IIdGenerator } from '../port/outbound/IIdGenerator';
import type { TicketUseCase } from "../port/in/TicketUseCase";
import type { ITicketRepository } from "../port/outbound/ITicketRepository";
import { Ticket } from '../../domain/Ticket';

export class TicketService implements TicketUseCase{
    
    constructor(
        private readonly repository : ITicketRepository,
        private readonly idGenerator : IIdGenerator
    ){}

    async createTicket(title: string, description: string, author: string): Promise<Ticket> 
    {
        const error = Ticket.validate(title,description,author)   
        if(error){
            throw new Error(error)
        }   

        const ticket = new Ticket(
            this.idGenerator .generate(),
            title.trim(),
            description.trim(),
            author.trim(),
            new Date()
        ) 
        
        await this.repository.save(ticket)
        return ticket
    }

    async listAll(): Promise<Ticket[]> {
        return this.repository.findAll();
    } 
}