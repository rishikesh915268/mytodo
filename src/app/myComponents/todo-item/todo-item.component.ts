import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() todoDelete: EventEmitter<{ todo: Todo, isCompleted: boolean }> = new EventEmitter();
  @Output() todoToggle: EventEmitter<Todo> = new EventEmitter();


  constructor() {
    const t = {
      sno: 12,
      title: "",
      desc: "",
      active: true,
    }
    this.todo = t;
  }

  ngOnInit(): void { }

  onClick(todo: Todo) {
    this.todoDelete.emit({ todo: todo, isCompleted: !todo.active });
  }

  onCheckboxClick(todo: Todo) {
    this.todoToggle.emit(todo);
  }
}
