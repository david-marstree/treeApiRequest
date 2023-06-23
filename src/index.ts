const qs = require("qs");

export const option = (event: any) => {
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

export const response = (data: any, statusCode: any = 200): object => {
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
