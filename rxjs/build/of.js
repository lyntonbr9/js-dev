"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let a = rxjs_1.of(1, 2, 3);
a.pipe(operators_1.map(x => x + '!!!'));
//(x) => console.log(x)
