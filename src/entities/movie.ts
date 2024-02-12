import { randomUUID } from 'node:crypto'

export class Movie {
    private id: string;
    private title: string;
    private category: string;
    private created_at: Date;

    constructor(props: Omit<Movie, 'id | created_at'>, id?:string, created_at?: Date) {
        Object.assign(this, props);
        if (!id && !created_at) {
            this.id = randomUUID(); 
        }
    }
}