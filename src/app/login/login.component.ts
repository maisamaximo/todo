import { HardcodedAuthenticationService } from "./../service/hardcoded-authentication.service";
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

  constructor(
    private router: Router,
    public hardcodedAuthenticationService: HardcodedAuthenticationService
  ) {}

  ngOnInit() {}

  handleLogin() {
    if (
      this.hardcodedAuthenticationService.authentication(
        this.username,
        this.password
      )
    ) {
      this.router.navigate(["welcome", this.username]);
      this.isInvalid = false;
    } else {
      this.isInvalid = true;
    }
  }
}
