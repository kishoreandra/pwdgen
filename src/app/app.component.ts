import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  length = 0;
  password = '';
  hasNums = false;
  hasLetters = false;
  hasSymbols = false;

  onChangeAlphabets() {
    this.hasLetters = !this.hasLetters;
  }
  onChangeNums() {
    this.hasNums = !this.hasNums;
  }
  onChangeSymbols() {
    this.hasSymbols = !this.hasSymbols;
  }
  onChangeLength(eventTarget: EventTarget): void {
    const value: string = (eventTarget as HTMLInputElement).value;
    const length = Number(value);
    if (Number.isInteger(length)) {
      this.length = length;
    }
  }

  onButtonClick() {
    this.password = 'My passwordd !!!';
  }
}
