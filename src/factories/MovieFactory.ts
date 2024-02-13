import { MovieRepository } from '../repositories/implementations/MovieRepository'
import { MovieService } from '../services/MovieService'
import { MovieController } from '../controllers/MovieController';


export const movieFactory = () => {
    const movieRepository = new MovieRepository();
    const movieService = new MovieService(movieRepository)
    const movieController = new MovieController(movieService)

    return movieController;
}