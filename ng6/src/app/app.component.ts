import {
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from "@angular/core";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";

import { NotificationService } from "./services/notification/notification.service";
import { OnInit } from "@angular/core";
import { HttpService } from "../../src/app/services/http/http.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  notification: string;
  showNotification: boolean;
  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,
    private notificationService: NotificationService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.notificationService.notification$.subscribe(message => {
      this.ref.detectChanges();
      this.notification = message;
      this.showNotification = true;
    });
  }
}
