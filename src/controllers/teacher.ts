import { prompt } from "inquirer";
import { addcourse } from "./add-course";
import { viewcourse } from "./view-course";
import { deletecourse } from "./delete-course";
//import { addfeedback } from "./add-feedback";
export async function teacher() {
  const { teacher } = await prompt({
    type: "list",
    name: "teacher",
    message: "Please choose an action 👀!",
    choices: [
      "1-add new course",
      "2-view course",
      "3-delete course",
      "4-exit"
    ],
    filter: (val) => +val[0],
  });
  switch (teacher) {
    case 1:
      await addcourse();
      break;

    case 2:
      await viewcourse();
      break;

    case 3:
      await deletecourse();
      break;
    case 4:
      process.exit(0);
  }
}
