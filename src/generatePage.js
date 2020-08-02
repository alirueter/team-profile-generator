const createCards = employees => {
    
    let cardOutput = ``
    for (let i = 0; i < employees.length; i++) {
        cardOutput = cardOutput + `
        <div class="row">
            <div class="col s12 m6">
                <div class="card">
                    <div class="card-content">
                        <div class="card-header">
                            <h2 class="card-title teal-text accent-4">${employees[i].getName()}</h2>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Role: ${employees[i].getRole()}</li>
                            <li class="list-group-item">ID: ${employees[i].getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto: ${employees[i].getEmail()}">${employees[i].getEmail()}</a></li>
                            `
                        if (employees[i].role === 'Manager') {
                            cardOutput = cardOutput + `
                            <li class="list-group-item">Office Number: ${employees[i].getOfficeNumber()}</li>
                            `
                        }
                        if (employees[i].role === 'Engineer') {
                            cardOutput = cardOutput + `
                            <li class="list-group-item">GitHub: <a href="https://github.com/${employees[i].getGithub()}">${employees[i].getGithub()}</a></li>
                            `
                        }
                        if (employees[i].role === 'Intern') {
                            cardOutput = cardOutput + `
                            <li class="list-group-item">School: ${employees[i].getSchool()}</li>
                            `
                        }
        cardOutput = cardOutput + `
                        </ul>
                    </div>
                </div>
            </div>
        </div>

       `        
    }
    return cardOutput;
}

function generatePage (teamName, employees) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title></title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    </head>
    <body>
        <nav class="teal accent-4">
            <div class="nav-wrapper">
                <a href="#" class="brand-logo center">${teamName}</a>
            </div>
        </nav>
        <div class="container">
            <div class="row">
                ${createCards(employees)}
            </div>
        </div>
    </body>
    </html>
    `
}

module.exports = generatePage;