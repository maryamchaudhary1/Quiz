import chalk from "chalk";
let earnedpoints:number = 0
async function result(a:boolean) {
    if(a==true){
        console.log(chalk.green.bold("\n Great! your answer is correct"));
        earnedpoints = earnedpoints + 10
    }else {
        console.log(chalk.red.bold("\n sorry! your answer is wrong"));
        
    }
    return earnedpoints;
}
export default result;