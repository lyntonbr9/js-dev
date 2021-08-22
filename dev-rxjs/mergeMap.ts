import {from, of} from "rxjs";
import {mergeMap, tap} from "rxjs/operators";

//
/**
 * Projects each source value to an Observable which is merged in the output Observable.
 *
 * Returns:
 *  An Observable that emits the result of applying the projection function to each item emitted by the source
 *  Observable and merging the results of the Observables obtained from this transformation.
 *
 * Returns an Observable that emits items based on applying a function that you supply to each item emitted by the
 * source Observable, where that function returns an Observable, and then merging those resulting Observables and
 * emitting the results of this merger.
 */

from(['RJ', 'SP', 'MG']).pipe(
    //tap(console.log),
    mergeMap(uf => {console.log(uf); return of(uf)})
).subscribe();
