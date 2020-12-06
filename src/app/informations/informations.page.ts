import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-informations",
  templateUrl: "./informations.page.html",
  styleUrls: ["./informations.page.scss"],
})
export class InformationsPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  goBack(myPath: string) {
    this.navCtrl.navigateBack(myPath);
  }
}
