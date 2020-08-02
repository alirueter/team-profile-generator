const Intern = require('../lib/Intern');

test('get school', () => {
    const school = 'schoolName';
    const intern = new Intern('Pancake', 1234, 'test@test.com', school);

    expect(intern.school).toBe(school);
});

test('getRole() should be intern', () => {
    const role = 'Intern';
    const intern = new Intern ('Pancake', 1234, 'test@test.com', role);

    expect(intern.role).toBe(role);
});