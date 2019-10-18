import {Component, OnInit} from '@angular/core';
import {List} from './models/list';
import {Todo} from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Git Organized';
  list: List;

  constructor() {
  }

  ngOnInit(): void {
    this.list = new List();
    this.list.name = 'YARDWORK';
    this.list.todos = [new Todo('Wow'), new Todo('Rake Leaves')];
  }

  saveTodo(todo: Todo) {
    todo.editing = false;
  }

  addNewTodo() {
    this.list.todos.push(new Todo('', true));
  }

  cancelTodo(todo: Todo) {
    if (todo.task.trim().length === 0) {
      this.deleteTodo(todo);
    } else {
      todo.editing = false;
    }
  }

  updateCheck(todo: Todo) {
    todo.completed = !todo.completed;
    if (todo.completed) {
      this.list.todos = this.list.todos.filter(t => t !== todo);
      this.list.todos.push(todo);
    }
  }

  deleteTodo(todo: Todo) {
    this.list.todos = this.list.todos.filter(t => t !== todo);
  }
}
