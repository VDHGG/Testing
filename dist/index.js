import express from "express";
import { InMemory } from "./adapter/outbound/InMemory";
import { UuidGenerator } from "./adapter/outbound/UuidGenerator";
import { TicketService } from "./application/service/TicketService";
import { TicketController } from "./adapter/in/TicketController";
const app = express();
app.use(express.json());
const repo = new InMemory();
const idGen = new UuidGenerator();
const service = new TicketService(repo, idGen);
const controller = new TicketController(service);
app.post('/tickets', controller.createTicket);
app.get('/tickets', controller.listTickets);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map