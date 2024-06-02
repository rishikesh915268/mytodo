import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  localIncomplete: string | null;
  localCompleted: string | null;
  incompleteTodos: Todo[];
  completedTodos: Todo[];
  showCompleted: boolean;

  constructor() {
    this.localIncomplete = localStorage.getItem("incompleteTodos");
    this.localCompleted = localStorage.getItem("completedTodos");
    this.incompleteTodos = this.localIncomplete ? JSON.parse(this.localIncomplete) : [];
    this.completedTodos = this.localCompleted ? JSON.parse(this.localCompleted) : [];
    this.showCompleted = false;
  }

  ngOnInit(): void {}

  deleteTodo(todo: Todo, isCompleted: boolean) {
    if (isCompleted) {
      const index = this.completedTodos.indexOf(todo);
      this.completedTodos.splice(index, 1);
      localStorage.setItem("completedTodos", JSON.stringify(this.completedTodos));
    } else {
      const index = this.incompleteTodos.indexOf(todo);
      this.incompleteTodos.splice(index, 1);
      localStorage.setItem("incompleteTodos", JSON.stringify(this.incompleteTodos));
    }
  }

  addTodo(todo: Todo) {
    this.incompleteTodos.push(todo);
    localStorage.setItem("incompleteTodos", JSON.stringify(this.incompleteTodos));
  }

  toggleTodoStatus(todo: Todo) {
    if (todo.active) {
      this.incompleteTodos = this.incompleteTodos.filter(t => t !== todo);
      this.completedTodos.push(todo);
    } else {
      this.completedTodos = this.completedTodos.filter(t => t !== todo);
      this.incompleteTodos.push(todo);
    }
    todo.active = !todo.active;
    localStorage.setItem("incompleteTodos", JSON.stringify(this.incompleteTodos));
    localStorage.setItem("completedTodos", JSON.stringify(this.completedTodos));
  }

  toggleView(showCompleted: boolean) {
    this.showCompleted = showCompleted;
  }
}
