import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
	selector: 'app-todos',
	templateUrl: './todos.component.html',
	styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
	todos: Todo[] = [];

	constructor(private todoService: TodoService) {}

	ngOnInit(): void {
		this.todoService.getTodos().subscribe(todos => {
			this.todos = todos;
		});
	}
	deleteTodo(todo: Todo) {
		// delete from server
		this.todoService.deleteTodo(todo).subscribe();
		// delete from UI
		this.todos = this.todos.filter(item => item.title !== todo.title);
	}

	addTodo(todo: Todo) {
		this.todoService.addTodo(todo).subscribe(todo => {
			this.todos.push(todo);
			console.log(this.todos);
		});
	}
}
