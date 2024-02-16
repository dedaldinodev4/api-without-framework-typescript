import { IMovieRepository } from '../IMovieRepository';
import { Movie } from '../../entities';
import { IMovieRequest } from '../../dtos';
import { Database } from '@/helpers/database';
import { join } from 'path';

const filename = join(__dirname, '../../database', 'db.json');

export class MovieRepository implements IMovieRepository {
    private movies: Movie[] = [];
    private _repository: Database = new Database({ filename })

    async getAllMovies(): Promise<Movie[]> {
        return this.movies;
    }

    async findAll(): Promise<Movie[]> {
        const movies = await this._repository._currentFileContent();
        return movies ?? []
    }

    async findById(id: string): Promise<Movie | null> {
        const movies = await this._repository._currentFileContent();
        const movie = movies.filter((obj) => obj.id === id)[0]

        return movie ?? null
    }

    async findByTitle(title: string): Promise<Movie | null> {
        const movies = await this._repository._currentFileContent();
        const movie = movies.filter((obj) => obj.title === title)[0]

        return movie ?? null
    }

    async create(data: IMovieRequest): Promise<Movie> {
        const movie = new Movie(data);
        await this._repository.write(movie);
        return movie;
    }

    async update(id: string, data: IMovieRequest): Promise<Movie> {
       const movies = await this._repository._currentFileContent();

        if (movies.find((obj) => obj.id === id)) {

            movies.filter(function(item) {
                return item.id !== id
            }).map((item) => {
                item.title = data.title;
                item.category = data.category;
                item.description = data.description;
            })

            const movie = {
                id,
                ...data
            }
            await this._repository.write(movies);
            return movie;
        }

    }

    async delete(id: string): Promise<void> {
        const movies = await this._repository._currentFileContent();
        if (movies.find(({ id }) => id === id)) {
            const newArrays = movies.filter((item) => {
                return item.id !== id
            })

            this._repository.write(newArrays);
        }

    }
}
