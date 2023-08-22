import qs from "qs";
import treeApiRequest from "../lib/esm/index.js";

import json from "./event.json" assert { type: "json" };

const option = treeApiRequest.option(json);

console.log(qs.parse(qs.stringify(option.data)));
