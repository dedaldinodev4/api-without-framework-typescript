import { MovieRepository } from '../repositories/implementations/MovieRepository'
import { MovieService } from '../services'
import { MovieController } from '../controllers';


export const movieFactory = () => {
    const movieRepository = new MovieRepository();
    const movieService = new MovieService(movieRepository)
    const movieController = new MovieController(movieService)

    return movieController;
}