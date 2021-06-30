const request = require("supertest");
const app = require("../../src/app");


describe('User controller test\'s', function () {
    it("should response the GET method with status 200", (done) => {
        request(app)
            .get("/users")
            .expect(200, done);
    });
    it('should response the POST method with status 200', (done) => {
        request(app)
            .post("/users")
            .send({name: 'test', email: 'test@gmail.com', password: 'test'})
            .expect(200, done);
    });
});
