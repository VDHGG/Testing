import type { error } from "node:console";
import type { TicketUseCase } from "../../application/port/in/TicketUseCase";
import type { Request, Response } from "express";

export class TicketController{
    constructor( private readonly useCase : TicketUseCase){
        this.createTicket = this.createTicket.bind(this)
        this.listTickets = this.listTickets.bind(this)
    }

    async createTicket (req: Request, res: Response){
        try {
            const{title, description,author } = req.body
            const ticket = await this.useCase.createTicket(title,description,author)
            res.status(201).json(ticket)
        } catch (err : any) {
            res.status(400).json({error: err.message})
        }
    }

    async listTickets(_req: Request, res: Response){
        try {
            const tickets = await this.useCase.listAll()
            res.json(tickets)
        } catch (err : any) {
           res.status(400).json({error: err.message})
        }
    }
}