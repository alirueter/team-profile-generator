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
    }
    
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
    }
    
}