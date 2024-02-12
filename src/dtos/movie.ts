
type Movie = {
    id: string;
    title: string;
    description: string;
    category: string;
    created_at: Date;
}

export type IMovieRequest = Partial<Movie>