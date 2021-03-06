import { LoungeComponent } from "./lounge/lounge.component";
import { AnonymousLoginComponent } from "./anonymous-login/anonymous-login.component";
import { ClassroomComponent } from "./classroom/classroom.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginLandingComponent } from "./login-landing/login-landing.component";

const routes: Routes = [
  { path: "", redirectTo: "classroom", pathMatch: "full" },
  { path: "login", component: LoginLandingComponent },
  { path: "classroom", component: ClassroomComponent },
  { path: "anon", component: AnonymousLoginComponent },
  { path: "lounge", component: LoungeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
