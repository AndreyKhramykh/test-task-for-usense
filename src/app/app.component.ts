import { AppInputComponent } from './app-input/app-input.component';
import { AppPasswordBlocksComponent } from './app-password-blocks/app-password-blocks.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    AppInputComponent,
    AppPasswordBlocksComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // receiving data from a child input

  setPasswordValue(value: string) {
    this.passwordValue = value;
  }

  // main variable - input data

  passwordValue = '';
}
