import { Component, OnInit } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirectTo: string;
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes: Componente[] = [
    {
      icon:'add-circle-outline',
      name:'Action-Sheet',
      redirectTo:'/hoja-accion'
    },
    {
      icon:'alert-circle-outline',
      name:'Alert',
      redirectTo:'/alerta'
    },
    {
      icon:'person-circle-outline',
      name:'Avatar',
      redirectTo:'/avatar'
    },
    {
      icon:'disc-outline',
      name:'Botones',
      redirectTo:'/botones'
    },
    {
      icon:'grid-outline',
      name:'Grid',
      redirectTo:'/grid'
    },
    {
      icon:'cube-outline',
      name:'Content',
      redirectTo:'/content'
    },
    {
      icon:'clipboard-outline',
      name:'Segment',
      redirectTo:'/segment'
    },
    {
      icon:'infinite-outline',
      name:'InfiniteScroll',
      redirectTo:'/infinite-scroll'
    },

  ];
  constructor() { }
  ngOnInit() {
  }
}
