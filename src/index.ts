const qs = require("qs");

const option = (event: any) => {
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

const response = (data: any, statusCode: any = 200): object => {
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

module.exports = {
  option,
  response,
};
