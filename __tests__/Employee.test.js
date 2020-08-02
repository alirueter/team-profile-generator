const Employee = require("../lib/Employee");

test('create new employee object', () => {
    const name = 'Pancake';
    const id = '1234';
    const email = 'test@test.com';
    
    const employee = new Employee(name, id, email);
    
    expect(employee.name).toBe(name);
    expect(employee.id).toEqual(id);
    expect(employee.email).toEqual(email);
});

test('getRole() should be employee', () => {
    const role = 'Employee';
    const employee = new Employee ('Pancake', '1234', 'test@test.com');

    expect(employee.role).toBe(role);
});