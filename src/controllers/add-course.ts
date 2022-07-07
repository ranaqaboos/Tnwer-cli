import axios from 'axios';
import { prompt } from 'inquirer';
import { v4 } from 'uuid';
import { token } from '..';
import { baseUrl, globalData } from '..';
export async function addcourse() {
	const Course= await prompt([
		{
			type: 'input',
			name: 'name',
			message: 'Enter course name  ',
		},
		{
			type: 'input',
			name: 'category',
			message: 'Enter the category ',
		},{
			type: 'input',
			name: 'descaription',
			message: 'Enter the descaription ',
		},{
			type: 'input',
			name: 'price',
			message: 'Enter price  ',
		},
  
	]);
   
  try{
    await axios.post(baseUrl + '/course/course',
		       {
        
           ...Course,
       },

   );
   console.log(`course ${Course.name}, has been added ✅`);}
   catch(error){
	console.log(error)
   }
}
