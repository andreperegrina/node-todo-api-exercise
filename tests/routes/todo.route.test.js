const request = require("supertest");
const app = require("../../src/app");


describe('Todo routes test\'s', function () {
    it("should response the route /todos GET with status 200", (done) => {
        request(app)
            .get("/todos")
            .expect(200, done);
    });
    it('should response the route /todos POST with status 200', (done) => {
        request(app)
            .post("/todos")
            .send({description: 'test', is_done: false, due_date: new Date()})
            .expect(200, done);
    });
    it('should response the route /todos/1 GET with status 200', (done) => {
        request(app)
            .get("/todos/1")
            .expect(200, done);
    });
    it('should response the route /todos/1 PUT with status 200', (done) => {
        request(app)
            .put("/todos/1")
            .send({description: 'test updated', is_done: true, due_date: new Date()})
            .expect(204, done);
    });
    it('should response the route /todos/1 DELETE with status 200', (done) => {
        request(app)
            .delete("/todos/1")
            .expect(200, done);
    });
});
