import { AngularFirestore } from "@angular/fire/firestore";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class GameService {
  constructor(private afs: AngularFirestore) {}
  sendScoreToDb(gameId, score) {
    return this.afs
      .collection("games")
      .doc(gameId)
      .update({ score: score });
  }

  playerReady(gameId, role) {
    return this.afs
      .collection("games")
      .doc(gameId)
      .update({ [role]: true });
  }

  playerNotReady(gameId, role) {
    return this.afs
      .collection("games")
      .doc(gameId)
      .update({ [role]: false });
  }

  postHighScore(classroomId, names, score) {
    console.log(classroomId, names, score);
    this.afs
      .collection("classrooms")
      .doc(classroomId.toString())
      .collection("scores")
      .add({ names: names, score: score });
  }
}
