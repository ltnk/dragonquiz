import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { QuizzesService } from "../quizzes.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  quizzes: Number[];
  questions: [];

  constructor(
    private quizzesService: QuizzesService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.quizzes = this.quizzesService.getQuizzes();
  }

  goTo(myPath: string, quizNumber: number) {
    console.log(quizNumber);
    this.quizzesService.quizSelected = quizNumber;
    this.navCtrl.navigateForward(myPath);
  }
}
