import { Router } from "@angular/router";
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
  message: string;

  constructor(private todoService: TodoDataService, private router: Router) {}

  ngOnInit() {
    this.refreshTodos();
  }

  deleteTodo(id) {
    this.todoService.deleteTodo("maisamaximo", id).subscribe((response) => {
      console.log(response);
      this.message = `Delete of Todo ${id} Successful!`;
      this.refreshTodos();
    });
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos("maisamaximo").subscribe((response) => {
      console.log(response);
      this.todos = response;
    });
  }

  updateTodo(id) {
    this.router.navigate(["todos", id]);
  }

  addTodo() {
    this.router.navigate(["todos", -1]);
  }
}
