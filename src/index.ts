import qs from "qs";
import type {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  APIGatewayProxyEventHeaders,
} from "aws-lambda";
import { HTTPMethod } from "http-method-enum";
import { StatusCodes } from "http-status-codes";

export type RequestData = {
  [key: string]: any;
};

export type ResultData = {
  [key: string]: any;
};

export type Options = {
  method: HTTPMethod;
  path: string;
  data: RequestData;
  headers: APIGatewayProxyEventHeaders;
};

const option = (event: APIGatewayProxyEvent) => {
  return {
    method: event.httpMethod,
    path: event.path,
    data: {
      ...(event.body ? JSON.parse(event.body) : {}),
      ...(event.queryStringParameters
        ? qs.parse(qs.stringify(event.queryStringParameters))
        : {}),
    },
    headers: event.headers,
  };
};

const response = (
  data: ResultData | null | undefined,
  statusCode: StatusCodes,
): APIGatewayProxyResult => {
  return {
    statusCode: !!data ? statusCode : 400,
    //  Uncomment below to enable CORS requests
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify(data),
  };
};

// module.exports = {
//   option,
//   response,
// };
//
export { option, response };
