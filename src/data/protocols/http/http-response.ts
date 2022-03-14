export enum HttpStatusCode {
  success = 200
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: object
}
