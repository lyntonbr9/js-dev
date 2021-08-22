
import {interval} from 'rxjs'
import {mapTo, map, tap} from 'rxjs/operators';

// you can use timer do delay the init of the interval
// observable range emite valores no range
const notificAPI = interval(1000);

// notificAPI.pipe(
//     mapTo({type: `Teste ${new Date()}`})
// )
//.subscribe(console.log);

notificAPI.pipe(
    map(() => `Teste ${new Date()}`)
).subscribe(console.log);
