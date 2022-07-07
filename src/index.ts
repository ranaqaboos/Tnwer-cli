import { resolve } from "path";
import { q1 } from "./questions/q1";
import { q2 } from "./questions/q2";
import figlet from "figlet";
import chalk from 'chalk';
import { parent } from "./controllers/parent";
import { student } from "./controllers/student";
import { teacher } from "./controllers/teacher";

export const baseUrl = 'http://127.0.0.1:3001';
export let token = '';
export const globalData: any = {
	token: '',
};
async function Print() {
	console.log(chalk.yellow.bold( figlet.textSync('    Welcome to ',{horizontalLayout:'default'})))
	console.log(chalk.yellow.bold(figlet.textSync(' Tnwer', {
		font: 'Ghost',
		horizontalLayout: 'default',
		verticalLayout: 'default',
		width: 80,
		whitespaceBreak: true
	})));	
	console.log()
	console.log(chalk.green.bold('               Education for a brighter future'))
		
	};	
console.log("\n");
async function start() {
	const functions:any = {1:student,2: parent,3:teacher}
	console.log();
	console.log();
	console.log();
	console.log();
	 await q1();
    	while(true){
		const input = await functions[globalData.role]()
		if(input == 'exit'){
			break
		}}}
Print();
start();
