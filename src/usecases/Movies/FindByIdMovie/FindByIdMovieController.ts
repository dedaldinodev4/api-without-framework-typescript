
import { handlerError } from "../../../errors/handlerError";
import { DEFAULT_HEADER } from "../../../utils";
import { FindByIdMovieUseCase } from "./FindByIdMovieUseCase";


export class FindByIdMovieController {

  constructor(
    private findByIdMovieUseCase: FindByIdMovieUseCase
  ){}

  async handle(request , response): Promise<any> {

    const { id } = request.queryString

    try {
      const data = await this.findByIdMovieUseCase.execute(id)

      response.writeHead(200, DEFAULT_HEADER);
      response.write(JSON.stringify({data}));
      return response.end();

    } catch (error) {
      response.writeHead(400, DEFAULT_HEADER)
      return handlerError(response)(error);
    }

  }
}