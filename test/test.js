const qs = require("qs");
const treeApiRequest = require("../lib/cjs/");

const json = require("./event.json");

const option = treeApiRequest.option(json);

console.log(qs.parse(qs.stringify(option.data)));
