// welcome.js
// welcome.js
import { validateAge } from "./validateAge.js";
import { verifyName } from "./getName.js";
import { deliverSurvey } from "./survey.js";

console.log("=".repeat(35));
console.log("Welcome to eligibility check");
console.log("=".repeat(35));
console.log("\n");

const age = validateAge(age);
const userName = verifyName(username);
console.log(`Hello ${userName}!\n`);

const survey_flag = prompt(
  "Would you like to participate in our survey (Y/N): "
);
if (survey_flag == "Y") deliverSurvey();
