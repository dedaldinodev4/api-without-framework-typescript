import { IMovieRequest } from "@/dtos";
import { Movie } from "@/entities";
import { IMovieRepository } from "@/repositories/IMovieRepository";


export class MovieService {

    constructor(private movieRepository: IMovieRepository) { }

    async create(data: IMovieRequest): Promise<Movie | Error> {
        const movieExists = await this.movieRepository.findByTitle(data.title)
        if (movieExists) {
            throw new Error('Movie already exists.');
        }
        return this.movieRepository.create(data);
    }

    async find(id?: string): Promise<Movie | Movie[] | Error> {
        if (id) {
            const movie = await this.movieRepository.find(id)
            if (!movie) {
                throw new Error('Movie does not exists.');
            }
            return movie
        }
        const movies = await this.movieRepository.find();
        return movies;
    }

    async update(id: string, data: IMovieRequest): Promise<Movie | Error> {
        const movieExists = await this.movieRepository.find(id)
        if (!movieExists) {
            throw new Error('Movie does not exists.');
        }
        return this.movieRepository.update(id,data);
    }

    async delete(id: string): Promise<void> {
        const movieExists = await this.movieRepository.find(id)
        if (!movieExists) {
            throw new Error('Movie does not exists.');
        }
        return this.movieRepository.delete(id);
    }

}