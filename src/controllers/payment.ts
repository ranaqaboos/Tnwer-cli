import axios from 'axios';
import { prompt } from 'inquirer';
import {baseUrl} from '..'
export async function payment() {
    const { data: course } = await axios.get(baseUrl + "/course/course");
    const formattedcourse = course.map((c: any) => ({
      name: c.name,
      category: c.category,
      price: c.price
    }));
console.table(formattedcourse);
    const questions = await prompt ([
        {
            
                type: "input",
                name: "name",
                message: "What's your course?"
         }
         ,
         {
            
                type: "input",
              name: "teacher",
              message: "What's your name teacher?",
    
         },
         {
			type: "list",
			name: "price",
			message: "What is the amount you want to pay?",
			choices: [
				"100",
				"200",
				"300",
				"400",
				"500",
				"600",
			]
		},
    ])
console.table(questions)

}   


