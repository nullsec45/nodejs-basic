import zlib from "zlib";
import fs from "fs";

const source=fs.readFileSync("zlib.mjs");

fs.writeFileSync("zlib.mjs.txt", result);