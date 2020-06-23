// https://stackoverflow.com/questions/45347362/integrating-onesignal-with-angular
// customización del botón de campana: https://documentation.onesignal.com/docs/bell-prompt
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class OnesignalService {
  OneSignal;

  constructor() {
    this.OneSignal = window["OneSignal"] || [];
    this.OneSignal.push(["init",
      {
        appId: "1d7d915a-9cf9-447d-9048-ef8c10f2cd20",
        //autoRegister: false,
        //allowLocalhostAsSecureOrigin: true,
        notifyButton: {
          enable: true, // campana de suscripción
          prenotify: true, // icono de mensaje no leído
          text: {
            "message.action.subscribed": "Gracias por suscribirte",
            "message.action.resubscribed": "Gracias por suscribirte",
            "message.action.unsubscribed":
              "No volverás a recibir notificaciones",
            "tip.state.unsubscribed": "Suscribirse a las notificaciones",
            "tip.state.subscribed": "Estás suscrito a las notificaciones",
            "dialog.main.title": "Administrar notificaciones",
            "dialog.main.button.subscribe": "SUSCRIBIRSE",
            "dialog.main.button.unsubscribe": "CANCELAR SUSCRIPCIÓN",
          },
          /*displayPredicate: () => {
            return this.OneSignal.isPushNotificationsEnabled().then(
              (isPushEnabled) => !isPushEnabled
            );
          },*/
        },
        subdomainName: "utasample",
        welcomeNotification: {
          disable: true,
        }
      },
    ],
    this.OneSignal.setDefaultTitle("Intranet UTA"),
    this.OneSignal.setDefaultNotificationUrl("https://www.uta.cl/")),
    this.OneSignal.push([
      "addListenerForNotificationOpened",
      (notification) => {
        console.log("Received NotificationOpened: ", notification);
      },
    ]);
  }

  ngOnInit() {
  }

  getPlayerId() {
    return this.OneSignal.getUserId();
  }
}
