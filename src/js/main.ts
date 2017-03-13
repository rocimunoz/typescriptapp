import * as _ from "lodash";

function helloWorld(compiler: string) {
    console.log('Hello from ${compiler}');
}

function versionLodash(){
    console.log('lodash version:', _.VERSION);
}

helloWorld("TypeScript");

versionLodash();
