import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

export class HelloWorldBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: "root",
})
export class WelcomeDataService {
  constructor(private http: HttpClient) {}

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>(
      "http://localhost:8080/hello-world-bean"
    );
  }

  executeHelloWorldWithPathService(name) {
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });

    return this.http.get<HelloWorldBean>(
      `http://localhost:8080/hello-world/path-variable/${name}`, {headers}
    );
  }

  createBasicAuthenticationHttpHeader() {
    let username = "maisamaximo";
    let password = "123"; 
    let basicAuthHeaderString =
      "Basic " + window.btoa(username + ":" + password);

    return basicAuthHeaderString;
  }
}
