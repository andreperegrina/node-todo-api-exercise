const User = require('../../src/models/user.model');

describe('User model test\'s', function () {
    it('should have the properties id, name, email, and password', function (done) {
        const expectedValues = ['id',
            'name',
            'email',
            'password',
        ];
        const user = new User();
        const userKeysSet = Object.keys(user).reduce((accum, e) => {
            accum.add(e);
            return accum;
        }, new Set())
        for (const value of expectedValues) {
            expect(userKeysSet.has(value)).toBeTruthy();
        }
        done();
    });
});
