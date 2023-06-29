import { DEFAULT_HEADER } from "../utils"

export const handlerError = response => {
  
  return error => {
    response.write(JSON.stringify({ 
      error: 'Error',
      message: error?.message,
      status: response.statusCode
    }));

    return response.end();
  }
}