
import { handlerError } from "../../../errors/handlerError";
import { DEFAULT_HEADER } from "../../../utils";
import { CreateMovieUseCase } from "./CreateMovieUseCase";


export class CreateMovieController {

  constructor(
    private createMovieUseCase: CreateMovieUseCase
  ){}

  async handle(request , response): Promise<any> {

    const { title, writer, id_category } = request.body;

    try {
      const data = await this.createMovieUseCase.execute({
        title, writer, id_category
      })

      response.writeHead(201, DEFAULT_HEADER);
      response.write(JSON.stringify({data}));
      return response.end();

    } catch (error) {
      response.writeHead(400, DEFAULT_HEADER)
      return handlerError(response)(error);
    }

  }
}