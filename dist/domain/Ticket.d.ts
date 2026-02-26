export declare class Ticket {
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly author: string;
    readonly createdAt: Date;
    constructor(id: string, title: string, description: string, author: string, createdAt: Date);
    static validate(title: unknown, description: unknown, author: unknown): string | null;
}
//# sourceMappingURL=Ticket.d.ts.map