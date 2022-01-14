const todos = [];

module.exports = {
    getAll,
    create,
    deleteOne
};

function getAll() {
    console.log(todos)
    return todos;
}


function create(todo){
    todo.id = Date.now() % 1000000;
    todos.push(todo);
} 

function deleteOne(id) {
    const idx = todos.findIndex(todo => todo.id === parseInt(id));
    todos.splice(idx, 1);
  }