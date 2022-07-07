// import axios from 'axios';
// import { prompt } from 'inquirer';
// import { v4 } from 'uuid';
// import { token } from '..';
// import {baseUrl} from '..'
import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '..';
export async function searchcourse() {
	const query = await prompt([
		{
			type: 'input',
			name: 'name',
			message: 'Enter name to search ',
		},
	]);
	
	const { data: course } = await axios.get(baseUrl + "/course/courses/search",{
		
		params: query,
	});
	
	const formattedcourse = course.map((c: any) => ({ name: c.name, category: c.category,
        descaription:c.descaription,price:c.price}));
	console.table(formattedcourse);
}
    

    