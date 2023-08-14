import inquirer from "inquirer";
export async function q1() {
    const ans1 = await inquirer.prompt([
        {
            name: "question1",
            type: "list",
            message: "Q1\n when Pakistan came into being \n",
            choices: ["14 Aug 1947", "15 Aug 1947", "23 march 1947"]
        }
    ]);
    return (ans1.question1 == "14 Aug 1947");
}
export async function q2() {
    const ans2 = await inquirer.prompt([
        {
            name: "question2",
            type: "list",
            message: "\n who was first pm of pakistan \n",
            choices: ["Musa", "Liaqat Ali Khan", "Quaide Azam"]
        }
    ]);
    return (ans2.question2 == "Liaqat Ali Khan");
}
;
