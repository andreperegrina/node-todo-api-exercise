const todoController = require("../../src/controllers/todo.controller");
const Todo = require("../../src/models/todo.model");
const {generateControllerParams} = require("../utils");

todoController.storage.push(new Todo(1), new Todo(2, 'Second todo'), new Todo(3, 'third todo', false, new Date()), new Todo(4, 'fourth todo'));

describe('Todo controller test\'s', function () {
    it("should return a list of todos", (done) => {
        const {req, res} = generateControllerParams();
        todoController.getAll(req, res);
        expect(res.send).toHaveBeenCalledWith(expect.arrayContaining([expect.any(Todo)]));
        done();
    });
    it("should create a new todo and returned", (done) => {
        const {req, res} = generateControllerParams(undefined, {
            id: 'test',
            description: 'test',
            is_done: false,
            due_date: JSON.stringify(new Date()),
        });
        todoController.create(req, res);
        expect(res.send).toHaveBeenCalledWith(expect.any(Todo));
        done();
    });
    it("should return the todo with the id sent it", (done) => {
        const {req, res} = generateControllerParams({id: 2});
        todoController.get(req, res);
        expect(res.send).toHaveBeenCalledWith(expect.any(Todo));
        expect(res.send).toHaveBeenCalledWith(expect.objectContaining({
            id: req.params.id,
            description: 'Second todo',
        }));
        done();
    });
    it("should update the todo with the id sent it", (done) => {
        const {req, res} = generateControllerParams({id: 3}, {
            description: 'third todo updated',
            is_done: true,
            due_date: new Date()
        });
        todoController.put(req, res);
        expect(res.send).toHaveBeenCalledWith(expect.any(Todo));
        expect(res.send).toHaveBeenCalledWith(expect.objectContaining({
            id: req.params.id,
            description: req.body.description,
            is_done: req.body.is_done,
            due_date: req.body.due_date,
        }));
        done();
    });
    it("should delete the todo with the id sent it", (done) => {
        const {req, res} = generateControllerParams({id: 4});
        todoController.delete(req, res);
        expect(todoController.storage.find((e) => e.id === req.id)).toBeUndefined();
        done();
    });
});
