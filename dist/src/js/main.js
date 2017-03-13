"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
function helloWorld(compiler) {
    console.log('Hello from ${compiler}');
}
function versionLodash() {
    console.log('lodash version:', _.VERSION);
}
helloWorld("TypeScript");
versionLodash();
