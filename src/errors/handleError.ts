
export const handleError = (response: any) => {
  
  return error => {
    response.write(JSON.stringify({ 
      error: 'Error',
      message: error?.message,
      status: response.statusCode
    }));

    return response.end();
  }
}