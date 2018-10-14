import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import { DetailsComponent } from "./details/details.component";
import { PostsComponent } from "./posts/posts.component";
import { PageResolver } from "./resolvers/page.resolver";

const routes: Routes = [
  {
    path: "",
    component: UsersComponent
  },
  {
    path: "page",
    component: PostsComponent,
    resolve: {
      data: PageResolver
    }
  },
  {
    path: "details/:id",
    component: DetailsComponent
  },
  {
    path: "requriment5",
    component: PostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
