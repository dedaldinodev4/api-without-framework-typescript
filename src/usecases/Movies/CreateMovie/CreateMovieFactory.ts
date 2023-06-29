import { PrismaMovieRepository } from "../../../repositories/implementations/prisma/PrismaMovieRepository"
import { CreateMovieController } from "./CreateMovieController";
import { CreateMovieUseCase } from "./CreateMovieUseCase";


export const createMovieFactory = () => {
  const prismaMovieRepository = new PrismaMovieRepository();
  const createMovieUseCase = new CreateMovieUseCase(
    prismaMovieRepository
  );
  const createMovieController = new CreateMovieController(
    createMovieUseCase
  )

  return createMovieController;
}