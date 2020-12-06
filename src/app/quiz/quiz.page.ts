import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { QuizzesService } from "../quizzes.service";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.page.html",
  styleUrls: ["./quiz.page.scss"],
})
export class QuizPage implements OnInit {
  currentQuiz: number;
  allQuestions;
  questions: {}[];

  question;
  currentQuestion: number;
  currentRep1: string;
  currentRep2: string;
  currentRep3: string;
  currentRep4: string;

  currentCorrectAnswer: number;

  currentQuestionNumber: number = 0;
  correctAnswer: number = 0;

  constructor(
    private quizzesService: QuizzesService,
    private navCtrl: NavController
  ) {
    this.currentQuiz = this.quizzesService.getQuizSelected();
    console.log("this.currentQuiz :", this.currentQuiz);

    this.allQuestions = this.quizzesService.getQuestions();
    console.log("this.allQuestions :", this.allQuestions);

    let number = this.currentQuiz;

    this.questions = this.allQuestions.filter(function (questions) {
      return questions.quiz === number;
    });

    console.log(this.questions);
    console.log("this.questions.length :", this.questions.length);

    /*     this.currentQuestion = this.questions[this.currentQuestionNumber].question;
    this.currentRep1 = this.questions[this.currentQuestionNumber].response1;
    this.currentRep2 = this.questions[this.currentQuestionNumber].response2;
    this.currentRep3 = this.questions[this.currentQuestionNumber].response3;
    this.currentRep4 = this.questions[this.currentQuestionNumber].response4;
    this.currentCorrectAnswer = this.questions[
      this.currentQuestionNumber
    ].correctAnswer; */
  }

  ngOnInit() {
    this.question = this.questions[this.currentQuestionNumber];
    console.log("ngOnInit this.question :", this.question);
    console.log("ngOnInit this.questions.length :", this.questions.length);

    this.currentQuestion = this.question.question;
    this.currentRep1 = this.question.response1;
    this.currentRep2 = this.question.response2;
    this.currentRep3 = this.question.response3;
    this.currentRep4 = this.question.response4;
    this.currentCorrectAnswer = this.question.correctAnswer;
  }

  goBack(myPath: string) {
    this.navCtrl.navigateBack(myPath);
  }

  goToNextQuestion(answerClicked) {
    if (answerClicked === this.currentCorrectAnswer) {
      this.correctAnswer += 1;
    }

    if (this.currentQuestionNumber < this.questions.length - 1) {
      this.currentQuestionNumber += 1;

      this.question = this.questions[this.currentQuestionNumber];
      console.log("this.question :", this.question);

      this.currentQuestion = this.question.question;
      this.currentRep1 = this.question.response1;
      this.currentRep2 = this.question.response2;
      this.currentRep3 = this.question.response3;
      this.currentRep4 = this.question.response4;
      this.currentCorrectAnswer = this.question.correctAnswer;
      console.log("currentQuestionNumber :", this.currentQuestionNumber);
      console.log("this.correctAnswer :", this.correctAnswer);
    } else if (this.currentQuestionNumber === this.questions.length - 1) {
      this.quizzesService.correctAnswerNumber = this.correctAnswer;
      this.navCtrl.navigateForward("results");
    }
  }
}
