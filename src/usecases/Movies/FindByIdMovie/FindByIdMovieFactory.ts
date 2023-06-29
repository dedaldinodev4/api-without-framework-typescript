import { PrismaMovieRepository } from "../../../repositories/implementations/prisma/PrismaMovieRepository"
import { FindByIdMovieController } from "./FindByIdMovieController";
import { FindByIdMovieUseCase } from "./FindByIdMovieUseCase";


export const findByIdMovieFactory = () => {
  const prismaMovieRepository = new PrismaMovieRepository();
  const findByIdMovieUseCase = new FindByIdMovieUseCase(
    prismaMovieRepository
  );
  const findByIdMovieController = new FindByIdMovieController(
    findByIdMovieUseCase
  )

  return findByIdMovieController;
}