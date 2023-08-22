"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.response = exports.option = void 0;
const qs_1 = __importDefault(require("qs"));
const option = (event) => {
    return {
        method: event.httpMethod,
        path: event.path,
        data: Object.assign(Object.assign({}, (event.body ? JSON.parse(event.body) : {})), (event.queryStringParameters
            ? qs_1.default.parse(qs_1.default.stringify(event.queryStringParameters))
            : {})),
        headers: event.headers,
    };
};
exports.option = option;
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
exports.response = response;
// module.exports = {
//   option,
//   response,
// };
//
exports.default = { option: exports.option, response: exports.response };
