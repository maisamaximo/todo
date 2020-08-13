import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HardcodedAuthenticationService {
  constructor() {}

  authentication(username, password) {
    if (username === "maisamaximo" && password === "123") {
      sessionStorage.setItem("authenticaterUser", username);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticaterUser");
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem("authenticaterUser");
  }
}
