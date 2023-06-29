import { IMovieRepository } from "../../../repositories/IMovieRepository";
import { ICreateMovie, IMovie } from "./CreateMovieDTO";


export class CreateMovieUseCase {

  constructor(
    private movieRepository: IMovieRepository
  ) {}

  async execute(data: ICreateMovie): Promise<IMovie| Error> {
    const movieExists = await this.movieRepository.findByTitle(data.title)
    
    if (!data.title) {
      throw new Error('Title is required.')
    }

    if (movieExists) {
      throw new Error('Movie already exists.')
    }
    const result = await this.movieRepository.create(data);
    return result;
  }

}