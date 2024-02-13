import { Movie } from "../entities";
import { IMovieRequest } from "../dtos";

export interface IMovieRepository {
  create(data: IMovieRequest):Promise<Movie>;
  update(id: string, data: IMovieRequest): Promise<Movie>
  find(id?: string): Promise<Movie | Movie[]>;
  findByTitle(title: string): Promise<Movie | null>
  delete(id: string): Promise<void>
}