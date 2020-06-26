import { Component, OnInit } from "@angular/core";
import { Todo } from "../../models/Todo";

@Component({
	selector: "app-todos",
	templateUrl: "./todos.component.html",
	styleUrls: ["./todos.component.scss"],
})
export class TodosComponent implements OnInit {
	title: string = "My Todos";
	todos: Todo[] = [];

	constructor() {}

	ngOnInit(): void {
		this.todos = [
			{
				id: 1,
				title: "First Todo",
				completed: false,
			},
			{
				id: 2,
				title: "Todo 2",
				completed: true,
			},
			{
				id: 3,
				title: "Todo 3",
				completed: false,
			},
		];
	}
}
