import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { MyApp } from './app.component';
import { CornPubs } from '../pages/cornpubs/cornpubs';
import { CornDev } from '../pages/corndev/corndev';
import { CornPerf } from '../pages/cornperf/cornperf';
//import { ItemDetailsPage } from '../pages/item-details/item-details';removed item details page
import { ListPage } from '../pages/list/list';

@NgModule({
  declarations: [
    MyApp,
    CornPubs,
    CornDev,
    CornPerf,
    ListPage,
    PdfViewerComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CornPubs,
    CornDev,
    CornPerf,
    ListPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
