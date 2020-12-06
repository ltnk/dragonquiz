import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { QuizzesService } from "../quizzes.service";

@Component({
  selector: "app-results",
  templateUrl: "./results.page.html",
  styleUrls: ["./results.page.scss"],
})
export class ResultsPage implements OnInit {
  correctAnswerNumber: number;

  constructor(
    private quizzesService: QuizzesService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.correctAnswerNumber = this.quizzesService.correctAnswerNumber;
  }
}
