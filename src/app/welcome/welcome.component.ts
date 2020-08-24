import { WelcomeDataService } from "./../service/data/welcome-data.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"],
})
export class WelcomeComponent implements OnInit {
  name = "";
  welcomeMessageFromService: string;

  constructor(
    private route: ActivatedRoute,
    private welcomeData: WelcomeDataService
  ) {}

  ngOnInit() {
    this.name = this.route.snapshot.params["name"];
  }

  getWelcomeMessage() {
    console.log(this.welcomeData.executeHelloWorldBeanService());
    this.welcomeData.executeHelloWorldBeanService().subscribe(
      (response) => this.handleSuccessfulResponse(response),
      (error) => this.handleErrorResponse(error)
    );
    console.log("last line");
  }

  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error) {
    this.welcomeMessageFromService = error.error.message;
  }

  getPath() {
    console.log(this.welcomeData.executeHelloWorldWithPathService(this.name));

    this.welcomeData.executeHelloWorldWithPathService(this.name).subscribe(
      (response) => this.handleSuccessfulResponse(response),
      (error) => this.handleErrorResponse(error)
    );
    console.log("last line");
  }
}
