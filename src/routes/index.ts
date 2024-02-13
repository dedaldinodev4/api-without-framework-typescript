import { movieFactory } from '../factories/MovieFactory';

const routes = {
  '/movies': {
    'GET': (request, response) => movieFactory().findMovie(request, response),
    'POST': (request, response) => movieFactory().createMovie(request, response),
  },
  '/movies/': {
    'GET': (request, response) => movieFactory().findMovie(request, response),
    'PUT': (request, response) => movieFactory().updateMovie(request, response),
    'DELETE': (request, response) => movieFactory().deleteMovie(request, response),
  },
};

export default routes;
