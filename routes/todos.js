var express = require('express');
var router = express.Router();

const todosCtrl = require('../controllers/todos');


router.get('/', todosCtrl.index);
router.post('/todos', todosCtrl.create);
router.delete('/todos/:id', todosCtrl.delete);

module.exports = router;