const Engineer = require('../lib/Engineer');

test('get github account', () => {
    const github = "username";
    const engineer = new Engineer ('Pancake', 1234, 'test@test.com', github);

    expect(engineer.github).toBe(github);
});

test('getRole() shoud be engineer', () => {
    const role = 'Engineer';
    const engineer = new Engineer ('Pancake', 1234, 'test@test.com', 'username', role);

    expect(engineer.role).toBe(role);
});