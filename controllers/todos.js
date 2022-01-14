const Todo = require('../models/todo');

module.exports = {
    index,
    create,
    delete: deleteTodo
};

function index(req, res) {
    res.render('index', {
        todos: Todo.getAll(),
    });
};

function create(req, res) {
    console.log(req.body);
    Todo.create(req.body);
    res.redirect('/')
}

function deleteTodo(req, res) {
    console.log(req.params.id)
    Todo.deleteOne(req.params.id);
    res.redirect('/');
}