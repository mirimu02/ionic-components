import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-hoja-accion',
  templateUrl: './hoja-accion.page.html',
  styleUrls: ['./hoja-accion.page.scss'],
})
export class HojaAccionPage implements OnInit {
  constructor(  private actionSheetCtrl: ActionSheetController) { }
  ngOnInit() {
  }
  onClick(){
    this.presentActionSheet();
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Menú de opciones',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash-outline',
          cssClass: 'rojo',
          data: {
            action: 'delete',
          },
          handler: () =>{console.log('Delete cicked')}
        },
        {
          text: 'Share',
          icon:'share-outline',
          data: {
            action: 'share',
          },
          handler: () =>{console.log('Share cicked')}
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon:'close-outline',
          data: {
            action: 'cancel',
          },
          handler: () =>{console.log('Cancel cicked')}
        },
      ],
    });
    await actionSheet.present();
  }
}
