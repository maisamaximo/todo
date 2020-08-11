import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  username = "maisamaximo";
  password = "123";
  errorMessage = "invalid login";
  isInvalid = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  handleLogin() {
    if (this.username === "maisamaximo" && this.password === "123") {
      //redirect to the welcome page
      this.router.navigate(["welcome", this.username]);
      this.isInvalid = false;
    } else {
      this.isInvalid = true;
    }
  }
}
