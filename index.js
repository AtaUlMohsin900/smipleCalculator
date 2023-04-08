import inquirer from "inquirer";
const answers = await inquirer.prompt([
  {
    type: "number",
    name: "numberOne",
    message: "Enter your first no:",
  },
  {
    type: "number",
    name: "numberTwo",
    message: "Enter your second no:",
  },
  {
    type: "list",
    name: "operator",
    choices: ["*", "+", "-", "/"],
    message: "Select Operator:",
  },
]);
console.log(answers);
