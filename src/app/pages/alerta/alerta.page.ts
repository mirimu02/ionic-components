import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {

  constructor( private alertController: AlertController) { }

  ngOnInit() {
  }
  onClick(){
    this.presentAlert()
    this.presentAlertPrompt()
  }

  
  async presentAlert() {
    const alert = await this.alertController.create({
      backdropDismiss:false,
      header: 'Esto es un mensaje de alerta!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'rojo',
          handler: () => {
            console.log('Alert canceled');
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('Alert confirmed');
          },
        },
      ],
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Subcripción!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          id: 'name1-id',
          value: 'Nombre de usuario'
        },
        {
          name: 'name2',
          type: 'text',
          placeholder: 'Escribe el nombre de usuario'
        },
      
        {
          name: 'name3',
          value: 'https//ionicframework.com',
          type: 'url',
          placeholder: 'PlaceHolder 1'
        },
        {
          name: 'name4',
          type: 'date',
          min: '2015-03-01',
          max: '2022-03-01'
        },
        {
          name: 'name5',
          type: 'date',
          min: '2015-03-01',
          max: '2022-03-01'
        },


      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'rojo',
          handler: () => {
            console.log('Subcripción canceled');
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: ( data: any) => {
            console.log(data);
          }
        }

      ]
    });

    await alert.present();
  }
  
}
