const inquirer = require('inquirer');

class generator {
    constructor() {
        this.data = {
            manager: {
                id: '',
                email: '',
                officeNumber: '',
            },
        engineers: [],
        interns: []
        }
    }

    getEmployeeInfo() {
        inquirer
        .prompt([
            {
                type: "input",
                message: "Please enter employee's ID: ",
                name: "id"
            },
            {
                type: "input",
                message: "Please enter employee's name: ",
                name: "name"
            },
            {
                type: "input",
                message: "Please enter employee's title: ",
                name: "title"
            }
        ])
    };
    
    getManagerInfo(managerInfo) {
        inquirer
        .prompt([
            {
                type: "input",
                message: "Please enter manager's office number: ",
                name: "officeNumber"
            }
        ])
        .then(input => {
            managerInfo.officeNumber = input.officeNumber;
            return managerInfo;
        })
        .then(managerInfo => {
            console.log(managerInfo);
            return managerInfo;
        })
    };

    getEngineerInfo(engineerInfo) {
        inquirer
        .prompt([
            {
                type: "input",
                message: "Please enter engineer's GitHub username: ",
                name: "github"
            }
        ])
        .then(input => {
            engineerInfo.github = input.github;
            return engineerInfo;
        })
        .then(engineerInfo => {
            console.log(engineerInfo);
            return engineerInfo;
        })
    };

    getInternInfo(internInfo) {
        inquirer
        .prompt([
            {
                type: "input",
                message: "Please enter intern's school: ",
                name: "school"
            }
        ])
        .then (input => {
            internInfo.school = input.school;
            return internInfo;
        })
        .then (internInfo => {
            console.log(internInfo);
            return internInfo;
        })
    };
}

const generator = new generator();
generator.getEmployeeInfo();