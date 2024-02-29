// class Todos {
//     todoList = [];
//     constructor() {

//     }
//     getTodos(){
//         return this.todoList;
//     }
//     addTodos(task) {
//         this.todoList.push(task);
//     }
// }

function Todos() {
    this.todoList = [];
    // this.getTodos = function () {
    //   return this.todoList;
    // };
    // this.addTodos = function (task) {
    //   this.todoList.push(task);
    // };
  }
  
  Todos.prototype.getTodos = function () {
    return this.todoList;
  };
  Todos.prototype.addTodos = function (task) {
    this.todoList.push(task);
  };
  
  export default Todos;
  