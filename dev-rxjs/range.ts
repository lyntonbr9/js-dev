import {range, from, of} from 'rxjs'
import {delay, tap, concatMap} from 'rxjs/operators';

const arr = [{id:1},{id:2},{id:3},{id:4}];
from(arr).pipe(
	concatMap(value => {
		//console.log(value);
		const randomDelay = 5000*Math.random();
		console.log('randomDelay', randomDelay);
		return of(value).pipe(
			//tap(val => console.log('val', randomDelay, val)),
			delay(randomDelay),
			tap(value => {
				console.log('val', randomDelay, value)
			})
		)
	}),
).subscribe()
//).subscribe(val => console.log('val', val));

