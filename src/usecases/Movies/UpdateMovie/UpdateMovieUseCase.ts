import { IMovieRepository } from "../../../repositories/IMovieRepository";
import { IUpdateMovie, IMovie } from "./UpdateMovieDTO";


export class UpdateMovieUseCase {

  constructor(
    private movieRepository: IMovieRepository
  ) {}

  async execute(id: string, data: IUpdateMovie): Promise<IMovie| Error> {
    const movieExists = await this.movieRepository.findById(id)

    if (!movieExists) {
      throw new Error('Movie does not exists.')
    }
    const result = await this.movieRepository.update(id, data);
    return result;
  }

}