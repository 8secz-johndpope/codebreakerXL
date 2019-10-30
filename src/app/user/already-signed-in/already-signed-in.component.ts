import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "./../user.service";
import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "app-already-signed-in",
  templateUrl: "./already-signed-in.component.html",
  styleUrls: ["./already-signed-in.component.scss"]
})
export class AlreadySignedInComponent implements OnInit {
  user;
  classroomId;
  constructor(
    private afAuth: AngularFireAuth,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = this.afAuth.authState;
    this.classroomId = this.activatedRoute.snapshot.paramMap.get("classroomId");
  }

  logOut() {
    this.userService.signOut();
  }

  playGame() {
    if (this.classroomId)
      this.router.navigateByUrl("/class/" + this.classroomId + "/gameselect");
    else this.router.navigateByUrl("/gameselect");
  }
}
