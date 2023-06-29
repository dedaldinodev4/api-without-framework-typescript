import { DEFAULT_HEADER } from "../utils";
import { createMovieFactory, 
  findAllMoviesFactory, 
  deleteMovieFactory,
  updateMovieFactory,
  findByIdMovieFactory 
} from "../usecases/Movies";


export const routes = {
  'movies:post': (request, response) => { return createMovieFactory().handle(request, response) },
  'movies:get': (request, response) => { 
    if (request.queryString?.id) { return findByIdMovieFactory().handle(request, response) }
    return findAllMoviesFactory().handle(request, response) 
  },
  'movies:put': (request, response) => { return updateMovieFactory().handle(request, response) },
  'movies:delete': (request, response) => { return deleteMovieFactory().handle(request, response) },
  default: (request, response) => {
    response.write('Hello My API Build of node.js without framework.')
    response.end()
}
}