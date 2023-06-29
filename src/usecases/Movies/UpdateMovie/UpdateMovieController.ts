
import { handlerError } from "../../../errors/handlerError";
import { DEFAULT_HEADER } from "../../../utils";
import { UpdateMovieUseCase } from "./UpdateMovieUseCase";


export class UpdateMovieController {

  constructor(
    private updateMovieUseCase: UpdateMovieUseCase
  ){}

  async handle(request , response): Promise<any> {

    const { title, writer, id_category } = request.body;
    const { id } = request.queryString

    try {
      const data = await this.updateMovieUseCase.execute(id, {
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