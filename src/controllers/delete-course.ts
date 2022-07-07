import axios from 'axios';
import { prompt } from 'inquirer';
import {baseUrl} from '..'

export async function deletecourse() {
	const { data: course } = await axios.get(
		baseUrl+"/course/course"
	  );
	const formattedCourse = course.map((c: any) => ({ name: c.name, category: c.category,
        descaription:c.descaription,price:c.price }));
	console.table(formattedCourse);

	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to delete ❌',
		filter: (val) => +val,
	});
	try{
	const Course = course[index];
	await axios.delete( baseUrl+`/course/${Course.course_id}`);
	console.log(`course for ${Course.name} has been deleted ✅`);
}catch(e) {console.error(e);}}
