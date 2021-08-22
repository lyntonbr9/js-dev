import {from, of} from "rxjs";
import {concatMap, map, switchMap, tap} from "rxjs/operators";

/**
 * Applies a given project function to each value emitted by the source Observable, and emits the resulting values as an Observable.
 *
 * Similar to the well known Array.prototype.map function, this operator applies a projection to each value and emits that projection in the output Observable.
 * 
 */

from([1,2,3]).pipe(
    tap(console.log),
    //switchMap(ev => of(ev*3)),
    concatMap( (ev) => {
         // @ts-ignore
        return of(9);
            //.pipe(
            //map(ev => of(ev * 3))
        //)
    })
).subscribe(console.log)
