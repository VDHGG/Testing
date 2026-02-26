import type { TicketUseCase } from "../../application/port/in/TicketUseCase";
import type { Request, Response } from "express";
export declare class TicketController {
    private readonly useCase;
    constructor(useCase: TicketUseCase);
    createTicket(req: Request, res: Response): Promise<void>;
    listTickets(_req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=TicketController.d.ts.map