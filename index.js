const qs = require('qs');


module.exports.option = (event) => {
    return {
        method: event.httpMethod,
        path: event.path,
        data: {
            ...(event.body ? JSON.parse(event.body) : {}),
            ...(event.queryStringParameters ? qs.parse(qs.stringify(event.queryStringParameters)) : {}),
        },
        headers: event.headers
    }
}


module.exports.response = (data, statusCode = 200) => {
    return {
        statusCode: (!!data) ? statusCode : 400,
        //  Uncomment below to enable CORS requests
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },
        body: JSON.stringify(data)
    }
}
