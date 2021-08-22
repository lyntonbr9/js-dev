import {of, from} from 'rxjs';
import {filter} from 'rxjs/operators';

/*
This code is an example of poorly designed scope management in which the state variable sinceLast is allowed to live outside the observable’s context.
The result is that the observable is no longer stateless, and the lifecycles of the state and the observable are now dependent on each other.
*/

let sinceLast = new Date();

console.log('sinceLast 1: ', sinceLast);

of([1,2,3,4]).pipe(
    filter(e => {
        let timeElapsed = (new Date()).getTime() - sinceLast.getTime(); 
        sinceLast = new Date();
        return timeElapsed < 200;
    }),
    ).subscribe(() => console.log('double clicked'));

console.log('sinceLast 2: ', sinceLast);
