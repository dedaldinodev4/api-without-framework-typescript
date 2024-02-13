
import { IMovieRepository } from '../IMovieRepository';
import { Movie } from '../../entities';
import { IMovieRequest } from '../../dtos';

export class MovieRepository implements IMovieRepository {
    private movies: Movie[] = [];

    async getAllMovies(): Promise<Movie[]> {
        return this.movies;
    }

    async find(id: string): Promise<Movie | Movie[]> {
        const movies = await this.getAllMovies();
        if (!id) {
            return movies.find(({ id }) => id === id)
        }
        return movies
    }

    async findByTitle(title: string): Promise<Movie | null> {
        const movie = this.movies.find((obj) => obj.title === title)
        return movie ?? null;
    }

    async create(data: IMovieRequest): Promise<Movie> {
        const movie = new Movie(data);
        this.movies.push(movie);
        return movie;
    }

    async update(id: string, data: IMovieRequest): Promise<Movie> {
       
        const { category, description, title } = data;
        if (this.movies.find(({ id }) => id === id)) {
            this.movies.filter((item) => item.id === id)
                .map((item) => {
                    item.category = category;
                    item.title = title;
                    item.description = description;
            })
            return this.movies.filter((item) => item.id === id)[0];
        }

    }

    async delete(id: string): Promise<void> {
     
        if (this.movies.find(({ id }) => id === id)) {
            const movies = this.movies.filter((item) => {
                return item.id !== id
            })

            this.movies = movies;
        }

    }
}
