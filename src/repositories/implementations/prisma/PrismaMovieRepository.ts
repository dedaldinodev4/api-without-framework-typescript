import { IMovieRequest, IMovie } from "../../../dtos/movie";
import { prismaClient } from "../../../infra/prisma";
import { IMovieRepository } from "../../IMovieRepository";


export class PrismaMovieRepository implements IMovieRepository{
  
  private client = prismaClient.movie;

  constructor() {}
  
  async create(data: IMovieRequest): Promise<IMovie> {
    const movie = await this.client.create({ data })
    return movie;
  }
  
  async update(id: string, data: IMovieRequest): Promise<IMovie> {
    
    const movie = await this.client.update({
      data,
      where: { id }
    });
    return movie;
  }

  async findAll(): Promise<IMovie[]> {
    const movies = await this.client.findMany({});
    return movies ?? [];
  }

  async findById(id: string): Promise<IMovie | null> {
    const movieExists = await this.client.findFirst({
      where: { id }
    }) 

    return movieExists!!;
  }

  async findByTitle(title: string): Promise<IMovie | null> {
    const movieExists = await this.client.findFirst({
      where: { title }
    }) 

    return movieExists!!;
  }

  async delete(id: string): Promise<void> {
    await this.client.delete({ where: { id } })
  }

  
}