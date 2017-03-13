import { Component } from '@angular/core';
import { PdfViewerComponent } from 'ng2-pdf-viewer';

@Component({
  selector: 'CornDev',
  templateUrl: 'corndev.html',
  providers: [PdfViewerComponent]
})
export class CornDev {
public pdf;
  constructor() {
    this.pdf="https://www.bookstore.ksre.ksu.edu/pubs/MF3305.pdf";
  }
}
