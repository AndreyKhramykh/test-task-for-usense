import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'test-task';
  passwordValue = '';
  passwordStatus = '';
  regexNumbers = /^[0-9]+$/;
  regexLetters = /^[a-zA-Z]+$/;
  regexSymbols = /^[^a-zA-Z0-9]+$/;
  // check the number of characters in the password and distribute them into arrays: numbers, letters, symbols
  checkSymbolsInPassword() {
    const charactersArray: any[] = [[], [], []];
    this.passwordValue.split('').forEach((character) => {
      if (this.regexNumbers.test(character)) {
        charactersArray[0].push('');
      }
      if (this.regexLetters.test(character)) {
        charactersArray[1].push('');
      }
      if (this.regexSymbols.test(character)) {
        charactersArray[2].push('');
      }
    });
    return charactersArray;
  }
  // count how many arrays are filled and give the number of filled arrays to determine the password complexity
  howMuchArraysIsFilled(arrayOfArrays: any[]) {
    let counter = 0;
    arrayOfArrays.forEach((array) => {
      if (array.length > 0) {
        counter++;
      }
    });
    return counter;
  }
  // depending on the complexity of the password, we assign classes to decorative blocks in the DOM
  setClassToBlock(blockNumber: number) {
    let array;
    let quantityOfPasswordCondition;
    if (this.passwordValue.length == 0) {
      this.passwordStatus = 'empty';
      return ['grey', 'grey', 'grey'][blockNumber];
    }
    if (this.passwordValue.length < 8) {
      this.passwordStatus = 'less then 8 symbols';
      return ['red', 'red', 'red'][blockNumber];
    } else {
      array = this.checkSymbolsInPassword();
      quantityOfPasswordCondition = this.howMuchArraysIsFilled(array);
      if (quantityOfPasswordCondition == 1) {
        this.passwordStatus = 'easy';
        return ['red', 'grey', 'grey'][blockNumber];
      }
      if (quantityOfPasswordCondition == 2) {
        this.passwordStatus = 'medium';
        return ['yellow', 'yellow', 'grey'][blockNumber];
      }
      if (quantityOfPasswordCondition == 3) {
        this.passwordStatus = 'strong';
        return ['green', 'green', 'green'][blockNumber];
      }
      return;
    }
  }
}