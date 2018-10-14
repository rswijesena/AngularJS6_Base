import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpService } from "../app/services/http/http.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient, private httpService: HttpService) {}

  /**
   * Read the json file fron assert location
   */
  readJSONFile() {
    return this.http.get("./assets/test.json");
  }
  /** Please ignore these methods for now this for my testing  */
  getUsers() {
    return this.httpService.get("https://jsonplaceholder.typicode.com/users/");
  }
  getUser(userId) {
    return this.http.get(
      "https://jsonplaceholder.typicode.com/users/" + userId
    );
  }

  getPosts() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
}
