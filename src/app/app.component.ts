import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReceiptUploadComponent } from './components/receipt-upload/receipt-upload.component';
import { ReceiptListComponent } from './components/receipt-list/receipt-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReceiptUploadComponent, ReceiptListComponent, RouterOutlet],
  template: `
    <app-receipt-upload></app-receipt-upload>
    <app-receipt-list></app-receipt-list>
  `,
})
export class AppComponent {}
