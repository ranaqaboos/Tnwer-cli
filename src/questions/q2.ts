import { prompt } from 'inquirer';

import{student}from '../controllers/student'
import{parent} from '../controllers/parent'
import{teacher} from '../controllers/teacher'
export async function q2() {
    const {role} =await  prompt({

		type: 'list',
		name: 'role',
		message: 'role',
		choices: [
            '1-student',
            '2-parent',
            '3-teacher'
        ],
			filter:(va2) => +va2[0],

		}) 
        return role
        
}