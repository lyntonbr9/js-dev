import {from} from "rxjs";


/**
 * Collects all source emissions and emits them as an array when the source completes.
 *
 * toArray will wait until the source Observable completes before emitting the array containing all emissions. When the
 * source Observable errors no array will be emitted.
 *
 */
from([1,2,3]). pipe(

)
