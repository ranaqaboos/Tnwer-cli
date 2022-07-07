import axios from "axios";
import { prompt } from "inquirer";
import { baseUrl } from "../index";
export async function resvation() {
  const { data: course } = await axios.get(baseUrl + "/course/course");
  const formattedcourse = course.map((c: any) => ({
    name: c.name,
    category: c.category,
  }));
  console.table(formattedcourse);

  const { data: teacher } = await axios.get(baseUrl + "/teacher/teacher");
  const formattedteacher = teacher.map((c: any) => ({
    name: c.name,
  }));
  console.table(formattedteacher);
  const { data: student } = await axios.get(baseUrl + "/student/student/student");
  const formattestuednt = student.map((c: any) => ({
    name: c.name,
  }));
  console.table(formattestuednt);
  const Resvation= await prompt([
    {
      type: "input",
      name: "course_id",
      message: "Enter index to course",
    },
    {
      type: "input",
      name: "teacher_id",
      message: "Enter index to teacher ",
    }, {
      type: "input",
      name: "parent_id",
      message: "Enter index to parent ",
 
    },
  ]);
  console.table(Resvation)

}
