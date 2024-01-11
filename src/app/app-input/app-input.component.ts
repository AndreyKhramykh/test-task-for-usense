import { Component, EventEmitter, Output, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './app-input.component.html',
  styleUrl: './app-input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppInputComponent),
      multi: true,
    },
  ],
})
export class AppInputComponent implements ControlValueAccessor {
  // variable where is the input value is stored

  inputContent = '';

  // logic for monitoring changes in input

  private onChange: (value: string) => void = (content) => {
    this.outputInputValue(content);
  };
  onInputChange(): void {
    this.onChange(this.inputContent);
  }

  // logic for passing data to the parent element

  @Output() outInputValue = new EventEmitter<string>();

  outputInputValue(inputValue: string) {
    console.log(`output-> inputValue.value`, inputValue);
    this.outInputValue.emit(inputValue);
  }

  // Control Value Accessor's methods

  writeValue(value: string): void {
    this.inputContent = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
}
