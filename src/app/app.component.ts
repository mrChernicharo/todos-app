import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	template: `{{ title }}`,
	styles: [],
})
export class AppComponent {
	title: string = "todos-app";
	subtitle: string = "todo list app with Angular";
}
