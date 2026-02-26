export class Ticket {
    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly description: string,
        public readonly author: string,
        public readonly createdAt: Date      
    ){}

    static validate(
        title: unknown,
        description: unknown,
        author: unknown
    ) : string | null{
        const t = typeof title === 'string' ? title.trim() : ''
        const d = typeof description === 'string' ? description.trim() : ''
        const a = typeof author === 'string' ? author.trim() : ''
        
        if(!t || t.length >200){
            return 'Title is required and must be ≤ 200 characters'
        }

         if(!d || t.length >1000){
            return 'Des is required and must be ≤ 1000 characters'
        }

         if(!a || !a.includes('@')){
            return 'Title is required and must be includes @'
        }
        return null;
    }
}