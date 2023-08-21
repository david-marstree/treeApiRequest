import type { APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyEventHeaders } from "aws-lambda";
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
declare const option: (event: APIGatewayProxyEvent) => {
    method: string;
    path: string;
    data: any;
    headers: APIGatewayProxyEventHeaders;
};
declare const response: (data: ResultData | null | undefined, statusCode: StatusCodes) => APIGatewayProxyResult;
export { option, response };
//# sourceMappingURL=index.d.ts.map