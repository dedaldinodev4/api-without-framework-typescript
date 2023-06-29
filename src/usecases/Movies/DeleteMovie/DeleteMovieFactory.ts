import { PrismaMovieRepository } from "../../../repositories/implementations/prisma/PrismaMovieRepository"
import { DeleteMovieController } from "./DeleteMovieController";
import { DeleteMovieUseCase } from "./DeleteMovieUseCase";


export const deleteMovieFactory = () => {
  const prismaMovieRepository = new PrismaMovieRepository();
  const deleteMovieUseCase = new DeleteMovieUseCase(
    prismaMovieRepository
  );
  const deleteMovieController = new DeleteMovieController(
    deleteMovieUseCase
  )

  return deleteMovieController;
}