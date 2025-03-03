import { Component } from '@angular/core';
import { ReceiptService } from '../../services/receipt.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-receipt-list',
  standalone: true,  // ✅ Mark it as standalone
  imports: [CommonModule, FormsModule],  // ✅ Import FormsModule for ngModel
  templateUrl: './receipt-list.component.html',
  styleUrls: ['./receipt-list.component.scss']
})
export class ReceiptListComponent {
  filterCategory = '';

  constructor(public receiptService: ReceiptService) {}

  filteredReceipts() {
    return this.receiptService.getReceipts().filter(r =>
      r.category.toLowerCase().includes(this.filterCategory.toLowerCase())
    );
  }

  downloadCSV() {
    this.receiptService.downloadCSV();
  }
}
