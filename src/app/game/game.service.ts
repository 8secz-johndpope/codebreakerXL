import { AngularFirestore } from "@angular/fire/firestore";
import { Injectable } from "@angular/core";
import firebase from "firebase";

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

  deleteEmojiList(gameId) {
    return this.afs
      .collection("games")
      .doc(gameId)
      .update({ emojiList: firebase.firestore.FieldValue.delete() });
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
}