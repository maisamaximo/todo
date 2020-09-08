import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BasicAuthenticationService {
  constructor(private http: HttpClient) {}

  authentication(username, password) {
    if (username === "maisamaximo" && password === "123") {
      sessionStorage.setItem("authenticaterUser", username);
      return true;
    } else {
      return false;
    }
  }

  executeAuthenticationService(username, password) {
    let basicAuthHeaderString =
      "Basic " + window.btoa(username + ":" + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString,
    });

    return this.http.get<AuthenticationBean>(
      `http://localhost:8080/basicauth`,
      { headers }
    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticaterUser");
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem("authenticaterUser");
  }
}

export class AuthenticationBean {
  constructor(public message: string) {}
}
