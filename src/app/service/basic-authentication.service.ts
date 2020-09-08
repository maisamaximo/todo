import { API_URL } from "./../app.constants";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

export const TOKEN = "token";
export const AUTHENTICATED_USER = "authenticaterUser";
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

    return this.http
      .get<AuthenticationBean>(`${API_URL}/basicauth`, { headers })
      .pipe(
        map((data) => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthHeaderString);
          return data;
        })
      );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) return sessionStorage.getItem(TOKEN);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}

export class AuthenticationBean {
  constructor(public message: string) {}
}
