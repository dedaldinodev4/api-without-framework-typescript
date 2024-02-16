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

    async findById(id: string): Promise<Movie | Error> {
        const movie = await this.movieRepository.findById(id);
        if (!movie) {
            throw new Error('Movie does not exists.');
        }
        return movie;
    }

    async findAll(): Promise<Movie[]> {
        const movies = await this.movieRepository.findAll();
        return movies;
    }

    async update(id: string, data: IMovieRequest): Promise<Movie | Error> {
        const movieExists = await this.movieRepository.findById(id)
        if (!movieExists) {
            throw new Error('Movie does not exists.');
        }
        return this.movieRepository.update(id,data);
    }

    async delete(id: string): Promise<void> {
        const movieExists = await this.movieRepository.findById(id)
        if (!movieExists) {
            throw new Error('Movie does not exists.');
        }
        return this.movieRepository.delete(id);
    }

}