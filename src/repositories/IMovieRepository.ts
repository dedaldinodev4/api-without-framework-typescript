import { IMovieRequest, IMovie } from "../dtos/movie";

export interface IMovieRepository {
  create(data: IMovieRequest):Promise<IMovie>;
  update(id: string, data: IMovieRequest): Promise<IMovie>
  findAll(): Promise<IMovie[]>;
  findById(id: string): Promise<IMovie>
  findByTitle(title: string): Promise<IMovie>
  delete(id: string): Promise<void>
}