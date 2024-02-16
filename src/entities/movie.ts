import { randomUUID } from 'node:crypto'

export class Movie {
    public id: string;
    public title: string;
    public category: string;
    public description: string;
    public created_at: Date;

    constructor(props: Omit<Movie, 'id | created_at'>, id?:string, created_at?: Date) {
        Object.assign(this, props);
        if (!id && !created_at) {
            this.id = randomUUID(); 
            this.created_at = new Date();
        }
    }
}