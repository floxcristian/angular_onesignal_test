import { Component, OnInit } from "@angular/core";
import { OnesignalService } from "./services/onesignal/onesignal.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  OneSignal;

  constructor(private oneSignalSrv: OnesignalService) {
    //this.OneSignal = this.oneSignalSrv.OneSignal;
  }

  ngOnInit() {
    /*
    this.OneSignal.on("subscriptionChange", (isSubscribed) => {
      console.log("The user's subscription state is now:", isSubscribed);
    });*/
  }

  sendMeANotification() {}
}
