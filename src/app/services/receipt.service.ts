import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';
import { Receipt } from '../models/receipt.model';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {
  private receipts: Receipt[] = [];

  addReceipt(receipt: Receipt) {
    this.receipts.push(receipt);
  }

  getReceipts() {
    return this.receipts;
  }

  downloadCSV() {
    let csvContent = 'Date,Amount,Category,File Name,File Type\n';
    
    this.receipts.forEach(receipt => {
      csvContent += `"${receipt.date}","${receipt.amount}","${receipt.category}","${receipt.fileName}","${receipt.fileType}"\n`;
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'receipts.csv');
  }
}
