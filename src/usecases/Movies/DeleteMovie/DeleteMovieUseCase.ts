import { IMovieRepository } from "../../../repositories/IMovieRepository";



export class DeleteMovieUseCase {

  constructor(
    private movieRepository: IMovieRepository
  ) {}

  async execute(id: string): Promise<void| Error> {
    const movieExists = await this.movieRepository.findById(id)
    
    if (!movieExists) {
      throw new Error('Movie does not exists.')
    }

    const movieDelete = await this.movieRepository.delete(id);
    return movieDelete;
  }

}