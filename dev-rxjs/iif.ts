import {from, iif, interval, Observable, of} from "rxjs";
import {map, mergeMap} from "rxjs/operators";


let subscribeToFirst: any;
const firstOrSecond = iif(
    () => subscribeToFirst,
    of('first'),
    of('second'),
);

/*
from([1,2,3]).pipe(
    mergeMap((ev) =>
        iif(
        () => ev ==1,
            of('1'),
            of(`outro: ${ev}`),
        )
    )
).subscribe(console.log);
*/

from([1,2,3]).pipe(
    map((ev) =>
        iif(
            () => ev ==1,
            of('1'),
            of(`outro: ${ev}`),
        )
    )
).subscribe(ev => ev.subscribe(console.log));
