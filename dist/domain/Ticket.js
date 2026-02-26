export class Ticket {
    id;
    title;
    description;
    author;
    createdAt;
    constructor(id, title, description, author, createdAt) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.author = author;
        this.createdAt = createdAt;
    }
    static validate(title, description, author) {
        const t = typeof title === 'string' ? title.trim() : '';
        const d = typeof description === 'string' ? description.trim() : '';
        const a = typeof author === 'string' ? author.trim() : '';
        if (!t || t.length > 200) {
            return 'Title is required and must be ≤ 200 characters';
        }
        if (!d || t.length > 1000) {
            return 'Des is required and must be ≤ 1000 characters';
        }
        if (!a || !a.includes('@')) {
            return 'Title is required and must be includes @';
        }
        return null;
    }
}
//# sourceMappingURL=Ticket.js.map