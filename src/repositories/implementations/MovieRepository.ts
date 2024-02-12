import { readFile, writeFile } from 'fs/promises';

import { IMovieRepository } from '../IMovieRepository';
import { Movie } from '@/entities';
import { IMovieRequest } from '@/dtos';

export class MovieRepository implements IMovieRepository {
    private file: string;
    constructor({ file }) {
        this.file = file;
    }

    //* Leitura do arquivo json *//
    async _currentFileContent() {
        return JSON.parse(await readFile(this.file).toString());
    }

    async find(id: string): Promise<Movie | Movie[]> {
        const movies = await this._currentFileContent();
        if (!id) {
            return movies.find(({ id }) => id === id)
        }
        return movies
    }

    async findByTitle(title: string): Promise<Movie | null> {
        const movies = await this._currentFileContent();
        const movie = movies.find(({ id }) => title === title)
        return movie ?? null;
    }

    async create(data: IMovieRequest): Promise<Movie> {
        const currentFile = await this._currentFileContent();
        const movie = new Movie(data);
        currentFile.push(movie);

        await writeFile(this.file, JSON.stringify(currentFile));
        return movie;
    }

    async update(id: string, data: IMovieRequest): Promise<Movie> {
        const all = await this._currentFileContent();

        if (all.find(({ id }) => id === id)) {
            const newArr = all.filter(function (item) {
                return item.id !== id
            })
            data = {
                id,
                ...data
            }
            const movie = new Movie(data);
            newArr.push(movie);
            await writeFile(this.file, JSON.stringify(newArr));
            return movie;
        }

    }

    async delete(id: string): Promise<void> {
        const all = await this._currentFileContent();

        if (all.find(({ id }) => id === id)) {
            const newArr = all.filter(function (item) {
                return item.id !== id
            })

            await writeFile(this.file, JSON.stringify(newArr));
        }

    }
}
