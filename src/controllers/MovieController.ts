import { ServerResponse, IncomingMessage } from 'http';
import { MovieService } from "../services";


export class MovieController {

    constructor(private movieService: MovieService) { }

    //* Find Movies *//
    async findAllMovies(req: IncomingMessage, res: ServerResponse) {
        try {

            const id = req.url?.split('/')[2];
            if (id) {
                const movie = await this.movieService.findById(id);
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(movie));
            }
            const movies = await this.movieService.findAll();
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(movies));

        } catch (error) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: error.message }));
        }
    }

    //* FindById Movie *//
    async findByIdMovie(req: IncomingMessage, res: ServerResponse) {
        console.log("cheguei")
        try {
            const id = req.url?.split('/')[2];
            const movie = await this.movieService.findById(id);
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(movie));

        } catch (error) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: error.message }));
        }
    }

    //* Create Movie *//
    async createMovie(req: IncomingMessage, res: ServerResponse) {
        try {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', async () => {
                const data = JSON.parse(body);
                const newMovie = await this.movieService.create(data);
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(newMovie));
            });
        } catch (error) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: error.message }));
        }
    }

    //* Updated Movie *//
    async updateMovie(req: IncomingMessage, res: ServerResponse) {
        const id = req.url?.split('/')[2];
        if (!id) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Movie ID not provided' }));
            return;
        }
        try {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', async () => {
                const data = JSON.parse(body);
                const updatedMovie = await this.movieService.update(id, data);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(updatedMovie));
            });
        } catch (error) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: error.message }));
        }
    }

    //* Delete Movie *//
    async deleteMovie(req: IncomingMessage, res: ServerResponse) {
        const id = req.url?.split('/')[2];
        if (!id) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Movie ID not provided' }));
            return;
        }
        try {
            await this.movieService.delete(id);
            res.writeHead(204);
            res.end();
        } catch (error) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: error.message }));
        }
    }
}