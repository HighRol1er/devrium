export enum HttpHeader {
  CONTENT_TYPE = 'Content-Type',
}

export enum HttpContentType {
  JSON = 'application/json',
}

type RequestOption = 'GET' | 'DELETE' | 'POST' | 'PUT' | 'PATCH';

export const requestOptions = (method: RequestOption, body?: object) => ({
  method,
  headers: {
    [HttpHeader.CONTENT_TYPE]: HttpContentType.JSON,
  },
  ...(body && { body: JSON.stringify(body) }),
});
