import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Pipe({
  name: 'digitToText'
})
export class DigitToTextPipe implements PipeTransform {
  private readonly converter: NumberToWordsConverter = new NumberToWordsConverter();

  transform(value: number): string {
    return this.converter.numberToWords(value);
  }
}

class NumberToWordsConverter {
  private readonly LESS_THAN_20: string[] = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  private readonly TENS: string[] = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  private readonly THOUSANDS: string[] = ["", "Thousand", "Million", "Billion"];

  numberToWords(num: number): string {
    if (num === 0) return "Zero";

    let i = 0;
    let words = "";

    while (num > 0) {
      if (num % 1000 !== 0)
        words = this.helper(num % 1000) + this.THOUSANDS[i] + " " + words;
      num = Math.floor(num / 1000);
      i++;
    }

    return words.trim();
  }

  private helper(num: number): string {
    if (num === 0)
      return "";
    else if (num < 20)
      return this.LESS_THAN_20[num] + " ";
    else if (num < 100)
      return this.TENS[Math.floor(num / 10)] + " " + this.helper(num % 10);
    else
      return this.LESS_THAN_20[Math.floor(num / 100)] + " Hundred " + this.helper(num % 100);
  }
}
