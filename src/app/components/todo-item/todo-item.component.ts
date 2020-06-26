import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from 'src/app/models/Todo';

@Component({
	selector: 'app-todo-item',
	templateUrl: './todo-item.component.html',
	styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
	@Input() todo: Todo;

	constructor(private todoService: TodoService) {}

	ngOnInit(): void {}

	setClasses() {
		let classes = {
			todo: true,
			'is-complete': this.todo.completed,
		};
		return classes;
	}
	onToggle(todo: Todo) {
		this.todo.completed = !this.todo.completed;
		this.todoService.toggleCompleted(this.todo).subscribe(todo => {
			console.log(todo);
		});
	}
	onDelete(todo: Todo) {
		console.log('delete');
	}
}
