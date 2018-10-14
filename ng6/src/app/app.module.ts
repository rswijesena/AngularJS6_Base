import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { PostsComponent } from "./posts/posts.component";
import { UsersComponent } from "./users/users.component";
import { DetailsComponent } from "./details/details.component";
import { HttpClientModule } from "@angular/common/http";
import { ErrorsModule } from "./errors";
import { HttpService } from "./services/http/http.service";
import { NotificationService } from "./services/notification/notification.service";
import { PageResolver } from "./resolvers/page.resolver";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PostsComponent,
    UsersComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ErrorsModule,
    BrowserAnimationsModule
  ],
  providers: [HttpService, NotificationService, PageResolver],
  bootstrap: [AppComponent]
})
export class AppModule {}
