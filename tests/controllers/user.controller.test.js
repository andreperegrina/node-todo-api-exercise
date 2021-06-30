const userController = require("../../src/controllers/user.controller");
const User = require("../../src/models/user.model");
const {generateControllerParams} = require("../utils");

userController.storage.push(new User());

describe('User controller test\'s', function () {
    it("should return a list of users", (done) => {
        const {req, res} = generateControllerParams();
        userController.get(req, res);
        expect(res.send).toHaveBeenCalledWith(expect.arrayContaining([expect.any(User)]));
        done();
    });
    it("should create a new user and returned", (done) => {
        const {req, res} = generateControllerParams(undefined, {
            id: 'test',
            name: 'test',
            email: 'test',
            password: 'test',
        });
        userController.create(req, res);
        expect(res.send).toHaveBeenCalledWith(expect.any(User));
        done();
    });
});
