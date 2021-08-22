
// @ts-ignore
// import * as cron from 'node-cron';

const cron = require('node-cron');
cron.schedule('1 * * * *', () => {
	console.log(`rodando ${Date.now()}`);
});
// const cron2 = require('node-cron');
console.log('vao rodar');
