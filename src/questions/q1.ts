import { prompt } from 'inquirer';
import axios from 'axios';
import chalk from 'chalk';
import figlet from "figlet";
import{baseUrl}from ".."
import{globalData}from".."
export async function q1() {
    const { q1Answer } = await prompt({
		type: 'list',
		name: 'q1Answer',
		message: 'Do you want to  login',
		choices: ['Yes', 'No'],	
	});
    
	if (q1Answer === 'No') {
		
		console.log(chalk.yellow( figlet.textSync('byyye',{horizontalLayout:'default'})))
		process.exit(0);
	}
    else if (q1Answer === 'Yes') {

	const {username,password,role}= await prompt([
		{
			type: 'input',
			name: 'username',
			message:'Enter your username 🥸 ',
			filter: (val) => val.toLowerCase(),
		},
		{
			type: 'password',
			name: 'password',
			message: 'Enter your password 🔑 ',
		},
	{

		type: 'list',
		name: 'role',
		message: 'role',
		choices: [
            '1-student',
            '2-parent',
            '3-teacher'
        ],
			filter:(va2) => +va2[0],

		}	
     ])
	 
	try {
		const result = await axios.post(baseUrl + '/user/login', {
			username,
			password,
			role
		});
		const newToken = result.data.token;
		globalData.token = newToken;
		globalData.role = role;
	} catch (err: any) {
		console.log(err?.response?.data);
		process.exit(0);
	}
}
	
}

