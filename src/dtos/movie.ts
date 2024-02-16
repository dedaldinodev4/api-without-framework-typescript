
type IMovie = {
    id: string;
    title: string;
    description: string;
    category: string;
    created_at: Date;
}

export type IMovieRequest = Omit<IMovie, 'id | created_at'>