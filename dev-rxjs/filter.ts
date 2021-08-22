import {interval, range} from "rxjs";
import {filter} from "rxjs/operators";

/**
 * Filter items emitted by the source Observable by only emitting those that satisfy a specified predicate.
 *
 */
interval(1000).pipe(
    filter(ev => ev % 2 == 0)
).subscribe(console.log)
