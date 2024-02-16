import { Movie } from "../entities";
import { IMovieRequest } from "../dtos";

export interface IMovieRepository {
  create(data: IMovieRequest):Promise<Movie>;
  update(id: string, data: IMovieRequest): Promise<Movie>
  findAll(): Promise<Movie[]>;
  findById(id: string): Promise<Movie | null>;
  findByTitle(title: string): Promise<Movie | null>
  delete(id: string): Promise<void>
}