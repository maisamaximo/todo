import { BasicAuthenticationService } from "./../service/basic-authentication.service";
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
    public hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService
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

  handleBasicAuthLogin() {
    this.basicAuthenticationService
      .executeAuthenticationService(this.username, this.password)
      .subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(["welcome", this.username]);
          this.isInvalid = false;
        },
        (error) => {
          console.log(error);
          this.isInvalid = true;
        }
      );
  }
}
