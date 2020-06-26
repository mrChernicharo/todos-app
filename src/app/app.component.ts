import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	templateUrl: "app.component.html",
	styles: [],
})
export class AppComponent {
	title: string = "todos-app";
	subtitle: string = "todo list app with Angular";

	sum(a: number, b: number) {
		return a + b;
	}
}
