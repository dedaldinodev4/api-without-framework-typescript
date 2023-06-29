
import { handlerError } from "../../../errors/handlerError";
import { DEFAULT_HEADER } from "../../../utils";
import { DeleteMovieUseCase } from "./DeleteMovieUseCase";


export class DeleteMovieController {

  constructor(
    private deleteMovieUseCase: DeleteMovieUseCase
  ){}

  async handle(request , response): Promise<any> {

    const { id } = request.queryString

    try {
      const data = await this.deleteMovieUseCase.execute(id)

      response.writeHead(204, DEFAULT_HEADER);
      response.write(JSON.stringify({data}));
      return response.end();

    } catch (error) {
      response.writeHead(400, DEFAULT_HEADER)
      return handlerError(response)(error);
    }

  }
}