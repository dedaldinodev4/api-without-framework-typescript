import { IMovieRepository } from "../../../repositories/IMovieRepository";
import { IMovie } from "./FindByIdMovieDTO";


export class FindByIdMovieUseCase {

  constructor(
    private movieRepository: IMovieRepository
  ) {}

  async execute(id: string): Promise<IMovie| Error> {
    const movieExists = await this.movieRepository.findById(id)
    
    if (!movieExists) {
      throw new Error('Movie does not exists.')
    }
    return movieExists;
  }

}