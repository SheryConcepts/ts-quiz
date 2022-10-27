import inquirer from "inquirer";

function getM(name: string) {
    return `Capital of ${name} is?`; 
}

const answers = ["Nairobi", "Vienna", "Quito", "Tehran", "Pindi", "Cairo", "Amman"]

inquirer.prompt(
    [
        {
            type: 'list',
            name: 'Kenya',
            message: getM("Kenya"),
            choices: ["Viena", "Nairobi", "Canberra"],
        },
        {
            type: 'list',
            name: 'Austria',
            message: getM("Austria"),
            choices: ["Biejing", "Nicosia", "Vienna"],
        },
        {
            type: 'list',
            name: 'Ecuador',
            message: getM("Ecuador"),
            choices: ["Baghdad", "Tokyo", "Quito"],
        },
        {
            type: 'list',
            name: 'Iran',
            message: getM("Iran"),
            choices: ["Tehran", "Nairobi", "Dhaka"],
        },
        {
            type: 'list',
            name: 'Pakistan',
            message: getM("Pakistan"),
            choices: ["Mian Channu", "Sahiwal", "Pindi"],
        },
        {
            type: 'list',
            name: 'Egypt',
            message: getM("Egypt"),
            choices: ["Viena", "Cairo", "Canberra"],
        },
        {
            type: 'list',
            name: 'Jordan',
            message: getM("Jordan"),
            choices: ["Ottawa", "Amman", "Los Angelas"],
        },
    ]
).then(
    ans => {
        let score = 0;
        let users_answers = Object.values(ans);
        console.log(users_answers);
        users_answers.forEach(
            (v, i) => {
                if (v === answers[i]) {
                    score += 2;
                }
            }
        )
        console.log(`You scored ${score} out of 14`)
    }
)


