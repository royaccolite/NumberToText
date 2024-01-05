// digit-to-text.component.ts

import { Component } from '@angular/core';
import { DigitToTextPipe } from './digit-to-text.pipe'; 
@Component({
  selector: 'app-digit-to-text',
  templateUrl: './digit-to-text.component.html',
  styleUrls: ['./digit-to-text.component.scss']
})
export class DigitToTextComponent {
  inputValue!: number;
  convertedText!: string;
  constructor(private digitToTextPipe: DigitToTextPipe) {}

  convertToText() {
    // Check if inputValue is a valid number
    if (!isNaN(this.inputValue) && this.inputValue >= 0 && this.inputValue <= 1000000) {
      // Call the custom pipe to convert the input value to text
      this.convertedText = this.digitToTextPipe.transform(this.inputValue);
    } else {
      this.convertedText = 'Invalid Input';
    }
  }
  }

