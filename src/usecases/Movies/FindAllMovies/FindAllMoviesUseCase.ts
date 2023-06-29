import { IMovieRepository } from "../../../repositories/IMovieRepository";
import { IMovie } from "./FindAllMoviesDTO";


export class FindAllMoviesUseCase {

  constructor(
    private movieRepository: IMovieRepository
  ) {}

  async execute(): Promise<IMovie[]> {

    const movies = await this.movieRepository.findAll();
    return movies;
  }

}