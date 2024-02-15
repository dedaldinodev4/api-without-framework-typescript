import { movieFactory } from '../factories';

const routes = {
  'movies:get': (request, response) => movieFactory().findAllMovies(request, response),
  'movies:post':(request, response) => movieFactory().createMovie(request, response),
  'movies:put': (request, response) => movieFactory().updateMovie(request, response),
  'movies:delete':  (request, response) => movieFactory().deleteMovie(request, response),
  default: (request, response) => {
    response.write('Hello My API Build of node.js without framework.')
    response.end()
  }
};

export default routes;
