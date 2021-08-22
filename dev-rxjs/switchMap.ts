// Returns an Observable that emits items based on applying a function that you supply to each item emitted by the source
// Observable, where that function returns an (so-called "inner") Observable. Each time it observes one of these inner
// Observables, the output Observable begins emitting the items emitted by that inner Observable. When a new inner
// Observable is emitted, switchMap stops emitting items from the earlier-emitted inner Observable and begins emitting
// items from the new one. It continues to behave like this for subsequent inner Observables.


import {of} from 'rxjs';
import {switchMap} from 'rxjs/operators';

const switched = of(1, 2, 3).pipe(
    switchMap(
        (x: number) => of(x, x ** 2, x ** 3)
    )
);
switched.subscribe(console.log);

