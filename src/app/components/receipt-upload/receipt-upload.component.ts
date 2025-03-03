import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule
import { ReceiptService } from '../../services/receipt.service';

@Component({
  selector: 'app-receipt-upload',
  standalone: true,
  imports: [FormsModule], // ✅ Add FormsModule here
  templateUrl: './receipt-upload.component.html',
  styleUrls: ['./receipt-upload.component.css']
})
export class ReceiptUploadComponent {
  selectedDate = '';
  selectedAmount = 0;
  selectedCategory = '';
  selectedFile: File | null = null;

  constructor(private receiptService: ReceiptService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadReceipt() {
    if (!this.selectedFile) return;

    const fileType = this.selectedFile.type;

    const reader = new FileReader();
    reader.onload = (e: any) => {
      let fileData = e.target.result;

      if (fileType === 'application/pdf') {
        fileData = 'data:application/pdf;base64,' + btoa(fileData);
      }

      this.receiptService.addReceipt({
        id: Date.now(),
        date: this.selectedDate,
        amount: this.selectedAmount,
        category: this.selectedCategory,
        imageUrl: fileData,
        fileName: this.selectedFile?.name || 'Unknown File', // ✅ Fix for possible null
        fileType: fileType
      });
    };

    if (fileType.startsWith('image/')) {
      reader.readAsDataURL(this.selectedFile);
    } else if (fileType === 'application/pdf') {
      reader.readAsBinaryString(this.selectedFile);
    }
  }
}
