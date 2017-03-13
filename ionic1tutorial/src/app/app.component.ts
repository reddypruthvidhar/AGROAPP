import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar, Splashscreen } from 'ionic-native';

import {Http} from '@angular/http';

//for map operator
import 'rxjs/add/operator/map';

import { CornPubs } from '../pages/cornpubs/cornpubs';
import { ListPage } from '../pages/list/list';
import { CornDev } from '../pages/corndev/corndev';
import { CornPerf } from '../pages/cornperf/cornperf';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = CornPubs;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public http: Http
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'CORN PUBLICATIONS', component: CornPubs },
      //{ title: 'My First List', component: ListPage },
      { title: 'CORN DEV', component: CornDev },
      { title: 'CORN PERFORMENCE', component: CornPerf}
    ];

  }



  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
