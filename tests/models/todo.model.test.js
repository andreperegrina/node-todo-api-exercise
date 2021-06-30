const Todo = require('../../src/models/todo.model');

describe('Todo model test\'s', function () {
    it('should have the properties id, description, is_done, and due_date', function (done) {
        const expectedValues = ['id',
            'description',
            'is_done',
            'due_date',
        ];
        const todo = new Todo();
        const userKeysSet = Object.keys(todo).reduce((accum, e) => {
            accum.add(e);
            return accum;
        }, new Set())
        for (const value of expectedValues) {
            expect(userKeysSet.has(value)).toBeTruthy();
        }
        done();
    });
});
