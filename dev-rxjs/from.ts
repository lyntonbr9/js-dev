import {from} from "rxjs";
import {delay, map, mergeMap, tap} from "rxjs/operators";
import * as https from 'https';
import * as http from 'http';
import axios from 'axios';

const url = "http://www.b3.com.br/pt_br/market-data-e-indices/servicos-de-dados/market-data/consultas/mercado-a-vista/opcoes/posicoes-em-aberto/";

//from(Promise.resolve(3)).pipe(
from(axios.get(url)).pipe(

).subscribe(console.log)
/*
from([1,5,8]).pipe(
    mergeMap( y => from([2,3]).pipe(
        delay(1000 * Math.random()),
        //delay(1000),
        map(x => x + y),
    ))
).subscribe(console.log)

 */
