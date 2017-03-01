import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';

export class Hero {
  id:number;
  name: string;
}

@Component({
  template:'<h1>{{title}}</h1><h2>{{hero.name}} details!<h2><div><label>id: </label>{{hero.id}}</div><div><label>name: </label><input [(ngModel)]="hero.name" placeholder="name"></div>',
  templateUrl: 'app.html'
})
export class AppComponent{
  title: 'Tour of Heroes';
  hero:Hero={
    id:1,
    name:'windstorm'
  };
  rootPage=TabsPage;
}
