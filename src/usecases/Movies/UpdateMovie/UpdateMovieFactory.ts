import { PrismaMovieRepository } from "../../../repositories/implementations/prisma/PrismaMovieRepository"
import { UpdateMovieController } from "./UpdateMovieController";
import { UpdateMovieUseCase } from "./UpdateMovieUseCase";


export const updateMovieFactory = () => {
  const prismaMovieRepository = new PrismaMovieRepository();
  const updateMovieUseCase = new UpdateMovieUseCase(
    prismaMovieRepository
  );
  const updateMovieController = new UpdateMovieController(
    updateMovieUseCase
  )

  return updateMovieController;
}