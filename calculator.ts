import chalk from "chalk";
import inquirer from "inquirer";

console.log(chalk.bgGreenBright.bold.inverse(" CALCULATOR "))

interface input {
    userName:string,
    firstNum: number,
    secondNum:number,
    operator: "MULTIPLICATION" | "DIVISION" |"ADDITION" | "SUBTRACTION"
}

let user:input = await inquirer.prompt([{
    type: "input",
    name : "userName",
    message: ("STATE YOUR NAME TO CONTINUE!"),
    validate(answer){
        if(!answer){
            return "i said state your name"
        }return true
    }
},{
    type:"number",
    name: "firstNum",
    message:"ENTER FIRST NUMBER",
    validate(answer){
       if(isNaN(answer)){
            return "enter number idiottttttt!!"
        } return true
    }
},{
    type:"number",
    name: "secondNum",
    message: "ENTER SECOND NUMBER",
    validate(answer){
        if(isNaN(answer)){
            return "enter number idiottttttt!!"
        } return true
    }
},{
    type: "rawlist",
    name:"operator",
    message:"SELECT",
    choices:["MULTIPLICATION","DIVISION","ADDITION","SUBTRACTION"]
    }
])

if (user.operator==="MULTIPLICATION"){
    console.log(chalk.green('ANSWER: ',user.firstNum * user.secondNum))
}else if (user.operator==="DIVISION"){
    console.log(chalk.green('ANSWER: ',user.firstNum / user.secondNum))
}else if (user.operator==="ADDITION"){
    console.log(chalk.green('ANSWER: ',user.firstNum + user.secondNum))
}else if (user.operator==="SUBTRACTION"){
    console.log(chalk.green('ANSWER: ',user.firstNum - user.secondNum))
} else {
    console.log(chalk.magentaBright(`you must have made some mistake !`))
}













