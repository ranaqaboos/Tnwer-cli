import axios from "axios";
import { prompt } from "inquirer";
import { baseUrl } from "..";
export async function student() {
  const { corsetData } = await prompt({
    type: "list",
    name: "corsetData",
    message: "Please choose a course 👀!",
    choices: ["1- math", "2-letter", "3-exit"],

    filter: (val) => +val[0],
  });
  switch (corsetData) {
    case 1:
      console.log("https://www.youtube.com/watch?v=JWA_q5FuL0M");
      break;
    case 2:
      console.log("https://www.youtube.com/watch?v=JWA_q5FuL0M");
      break;

    case 3:
      process.exit(0);
  }
}
