import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
	selector: 'app-todos',
	templateUrl: './todos.component.html',
	styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
	title: string = 'My Todos';
	todos: Todo[] = [];

	constructor(private todoService: TodoService) {}

	ngOnInit(): void {
		this.todoService.getTodos().subscribe(todos => {
			this.todos = todos;
		});
	}
}
