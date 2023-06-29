import { PrismaMovieRepository } from "../../../repositories/implementations/prisma/PrismaMovieRepository"
import { FindAllMoviesController } from "./FindAllMoviesController";
import { FindAllMoviesUseCase } from "./FindAllMoviesUseCase";


export const findAllMoviesFactory = () => {
  const prismaMovieRepository = new PrismaMovieRepository();
  const findAllMoviesUseCase = new FindAllMoviesUseCase(
    prismaMovieRepository
  );
  const findAllMoviesController = new FindAllMoviesController(
    findAllMoviesUseCase
  )

  return findAllMoviesController;
}