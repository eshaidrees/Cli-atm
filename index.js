#! /usr/bin/env node
import inquirer from "inquirer";
let my_balance = 10000;
let my_pin = 2525;
let pinAnswer = await inquirer.prompt([
    {
        message: "Enter Your Pin",
        type: "number",
        name: "Pin"
    },
]);
if (pinAnswer.Pin === my_pin) {
    let operation = await inquirer.prompt([
        {
            message: "Select any one",
            type: "list",
            name: "list",
            choices: ["Withdraw", "Fastcash", "Check Balance"]
        },
    ]);
    if (operation.list === "Withdraw") {
        let amount = await inquirer.prompt([
            {
                message: "Enter your amount",
                type: "number",
                name: "amount",
            },
        ]);
        if (amount.amount <= my_balance && amount.amount >= 500) {
            my_balance -= amount.amount;
            console.log(`your remaining balance is: ${my_balance}`);
        }
        else {
            console.log("Invalid amount");
        }
    }
    if (operation.list === "Fastcash") {
        let fastCash = await inquirer.prompt([
            {
                message: "Select amount ",
                type: "list",
                name: "cash",
                choices: ["1000", "2000", "3000", "4000", "5000"]
            },
        ]);
        if (fastCash.cash === "1000") {
            console.log("your remaining balance is:", my_balance - 1000);
        }
        else if (fastCash.cash === "2000") {
            console.log("your remaining balance is:", my_balance - 2000);
        }
        else if (fastCash.cash === "3000") {
            console.log("your remaining balance is:", my_balance - 3000);
        }
        else if (fastCash.cash === "4000") {
            console.log("your remaining balance is:", my_balance - 4000);
        }
        else if (fastCash.cash === "5000") {
            console.log("your remaining balance is:", my_balance - 5000);
        }
    }
    else if (operation.list === "Check Balance") {
        console.log(`Your Balance is: ${my_balance}`);
    }
}
else {
    console.log("Invalid pin");
}
