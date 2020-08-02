const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Employee');
const Intern = require('./lib/Intern');
const generatePage = require('./src/generatePage');


let teamName = '';
const employees = [];

const createTeam = () => {
    inquirer
    .prompt([
        {
            type: "list",
            name: "pickMember",
            message: "What is the title of the team member you want to add?",
            choices: ["Manager", "Engineer", "Intern", "No more team members to add"]
        }
    ])
    .then(userChoice => {
        switch(userChoice.pickMember) {
            case 'Manager':
                addManager();
                break;
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            default: writeToFile();
        }
    });
};

const addManager = () => {
    inquirer
    .prompt([
        {
            type: "input",
            message: "Please enter manager's name: ",
            name: "managerName"
        },
        {
            type: "input",
            message: "Please enter manager's employee ID: ",
            name: "managerId"
        },
        {
            type: "input",
            message: "Please enter manager's email: ",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "Please enter manager's office number: ",
            name: "officeNumber"
        }
    ])
    .then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
        employees.push(manager);
        createTeam();
    })
};

const addEngineer = () => {
    inquirer
    .prompt([
        {
            type: "input",
            message: "Please enter engineer's name: ",
            name: "engineerName"
        },
        {
            type: "input",
            message: "Please enter engineer's employee ID: ",
            name: "engineerId"
        },
        {
            type: "input",
            message: "Please enter engineer's email: ",
            name: "engineerEmail"
        },
        {
            type: "input",
            message: "Please enter engineer's GitHub username: ",
            name: "github"
        }
    ])
    .then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github);
        employees.push(engineer);
        createTeam();
    })
};

const addIntern = () => {
    inquirer
    .prompt([
        {
            type: "input",
            message: "Please enter intern's name: ",
            name: "internName"
        },
        {
            type: "input",
            message: "Please enter intern's employee ID: ",
            name: "internId"
        },
        {
            type: "input",
            message: "Please enter intern's email: ",
            name: "internEmail"
        },
        {
            type: "input",
            message: "Please enter intern's school: ",
            name: "school"
        }
    ])
    .then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
        employees.push(intern);
        createTeam();
    })
};

const writeToFile = () => {
    const html = generatePage (teamName, employees);

    fs.writeFile('./dist/index.html', html, err => {
        if (err) throw new Error(err);
        console.log('Team profile has been created in dist folder.');
    });
}

function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'teamName',
            message: 'Enter your team name:  '
        }
    ])
    .then(answers => {
        if (answers.teamName) {
            teamName = answers.teamName;
        }
        else {
            teamName = 'My Team'
        }

        createTeam();
    })
}

init();