import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts:any;
  constructor(
  public navCtrl: NavController,
  public http: Http) {
    this.http.get('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC').map(res => res.json()).subscribe(d => {
      this.posts = d.data;
      });
  }

}
