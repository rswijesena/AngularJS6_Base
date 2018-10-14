import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"]
})
export class PostsComponent implements OnInit {
  posts$: Object;

  constructor(private data: DataService) {}

  givenWord;
  findStr;
  answerToStartWith;
  answerToEndWith;

  /**
   * This method will retun true if the given word start with the given text
   * else it will return false
   * @param givenWord The given string
   * @param findStr find start with string
   */
  customeStartWith(givenWord, findStr) {
    var exists = new RegExp("^" + findStr).test(givenWord);
    return exists;
  }
  /**
   * This method will retun true if the given word end with the given text
   * else it will return false
   * @param givenWord The given string
   * @param findStr find start with string
   */
  customeEndWith(givenWord, findStr) {
    var exists = new RegExp(findStr + "$").test(givenWord);
    return exists;
  }
  /**
   * On component load functions will be called.
   */
  ngOnInit() {
    this.givenWord = "hang the dj";
    this.findStr = "hang";

    this.answerToStartWith = this.customeStartWith(
      this.givenWord,
      this.findStr
    );

    this.answerToEndWith = this.customeEndWith(this.givenWord, this.findStr);
  }
}
