//resources
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

const path = require('path');
const fs = require('fs');

const templates = path.resolve(__dirname, "./src");

const render = employees => {
    const page = [];

    page.push(employees
        .filter(employee.getRole() === 'Manager')
        .map(manager => renderManager(manager)));

    page.push(employees
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => renderEngineer(engineer)));
    page.push(employees
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => renderIntern(intern)));
    
    return renderMain(page.join(""));
};

const renderManager = manager => {
    const template = fs.readFileSync(path.resolve(templates, 'manager.html'));

    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "title", manager.getRole());
    template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());
    
    return template;
};

const renderEngineer = engineer => {
    const template = fs.readFileSync(path.resolve(templates, 'engineer.html'));

    template = replacePlaceholders(template, "name", engineer.getName());
    template = replacePlaceholders(template, "id", engineer.getId());
    template = replacePlaceholders(template, "email", engineer.getEmail());
    template = replacePlaceholders(template, "title", engineer.getRole());
    template = replacePlaceholders(template, "officeNumber", engineer.getGithub());
    
    return template;
};

const renderIntern = intern => {
    const template = fs.readFileSync(path.resolve(templates, 'intern.html'));

    template = replacePlaceholders(template, "name", intern.getName());
    template = replacePlaceholders(template, "id", intern.getId());
    template = replacePlaceholders(template, "email", intern.getEmail());
    template = replacePlaceholders(template, "title", intern.getRole());
    template = replacePlaceholders(template, "officeNumber", intern.getSchool());
    
    return template;
};

const renderMain = page => {
    const template = fs.readFileSync(path.resolve(templates, "main.html"));
    return replacePlaceholders(template, 'team', page);
};

const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
};

module.exports = render;