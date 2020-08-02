const Manager = require('../lib/Manager');

test('get office number', () => {
    const officeNumber = '2';
    const manager = new Manager('Pancake', 1234, 'test@test.com', officeNumber);

    expect(manager.officeNumber).toBe(officeNumber);
});

test('getRole() should be manager', () => {
    const role = 'Manager';
    const manager = new Manager('Pancake', 1234, 'test@test.com', role);

    expect(manager.role).toBe(role);
});