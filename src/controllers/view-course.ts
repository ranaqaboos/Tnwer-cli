import axios from 'axios';
import { prompt } from 'inquirer';
import {baseUrl} from '..'

export async function viewcourse() {
	
    const { data: course } = await axios.get(
		baseUrl+ "/course/course"
	  );
	  const formattedcourse = course.map((c: any) => ({
		name: c.name, category: c.category,
        descaription:c.descaription,price:c.price
	  }));
	  console.table(formattedcourse);
}
