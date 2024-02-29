class Todos {
    todoList = [];
    constructor() {

    }
    getTodos(){
        return this.todoList;
    }
    addTodos(task) {
        this.todoList.push(task);
    }
}

export default Todos;