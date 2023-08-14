import inquirer from "inquirer";
import chalk from "chalk";
import showbanner from "node-banner";
import result from "./result.js";
import {q1, q2 } from "./question.js";

async function banner() {
    await new Promise((res) => {
        showbanner ('\n Quiz')
        setTimeout(res,2000);
})
    
}
await banner();

let answer1 = await q1();
let score = await result(answer1);

let answer2 = await q2();
score = await result(answer2);


console.log(score);


