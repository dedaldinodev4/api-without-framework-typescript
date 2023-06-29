
import { handlerError } from "../../../errors/handlerError";
import { DEFAULT_HEADER } from "../../../utils";
import { FindAllMoviesUseCase } from "./FindAllMoviesUseCase";


export class FindAllMoviesController {

  constructor(
    private findAllMoviesUseCase: FindAllMoviesUseCase
  ){}

  async handle(request , response): Promise<any> {

    try {
      const data = await this.findAllMoviesUseCase.execute()

      response.writeHead(201, DEFAULT_HEADER);
      response.write(JSON.stringify({data}));
      return response.end();

    } catch (error) {
      response.writeHead(400, DEFAULT_HEADER)
      return handlerError(response)(error);
    }

  }
}