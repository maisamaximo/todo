import { TodoDataService } from "./../service/data/todo-data.service";
import { Component, OnInit } from "@angular/core";

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: "app-list-todos",
  templateUrl: "./list-todos.component.html",
  styleUrls: ["./list-todos.component.css"],
})
export class ListTodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoDataService) {}

  ngOnInit() {
    this.todoService.retrieveAllTodos("maisamaximo").subscribe((response) => {
      console.log(response);
      this.todos = response;
    });
  }
}
