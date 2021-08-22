import { of } from "rxjs";
import { map } from "rxjs/operators";

let a = of(1,2,3);
a.pipe(
    map(x => x + '!!!')
).subscribe(console.log);
//(x) => console.log(x)

