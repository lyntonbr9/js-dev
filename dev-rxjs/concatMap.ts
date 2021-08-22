
import {from, of} from 'rxjs';
import {concatMap, tap} from "rxjs/operators";

/**
 * Projects each source value to an Observable which is merged in the output Observable, in a serialized fashion waiting
 * for each one to complete before merging the next.
 *
 * Returns an Observable that emits items based on applying a function that you supply to each item emitted by the
 * source Observable, where that function returns an (so-called "inner") Observable. Each new inner Observable is
 * concatenated with the previous inner Observable.
 *
 * Warning: if source values arrive endlessly and faster than their corresponding inner Observables can complete, it will
 * result in memory issues as inner Observables amass in an unbounded buffer waiting for their turn to be subscribed to.
 *
 * Note: concatMap is equivalent to mergeMap with concurrency parameter set to 1.
 *
 */
from([1,2,3]).pipe(
    tap(console.log),
    concatMap(ev => of({evento: ev}))
    )
    .subscribe(console.log)
