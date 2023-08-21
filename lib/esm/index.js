import qs from "qs";
const option = (event) => {
    return {
        method: event.httpMethod,
        path: event.path,
        data: Object.assign(Object.assign({}, (event.body ? JSON.parse(event.body) : {})), (event.queryStringParameters
            ? qs.parse(qs.stringify(event.queryStringParameters))
            : {})),
        headers: event.headers,
    };
};
const response = (data, statusCode) => {
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