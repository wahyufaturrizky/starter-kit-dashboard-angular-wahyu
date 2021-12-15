import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormInterface } from '@app/interface/UserInterface';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css'],
})
export class TextFieldComponent implements OnInit {
  @Output() onHandleChange: EventEmitter<any> = new EventEmitter();
  @Input() fields: FormInterface | undefined;

  constructor() {}

  handleChange(data: any): void {
    this.onHandleChange.emit(data);
  }

  ngOnInit(): void {}
}
