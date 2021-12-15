import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-filled',
  templateUrl: './button-filled.component.html',
  styleUrls: ['./button-filled.component.css'],
})
export class ButtonFilledComponent implements OnInit {
  @Input() label: string | undefined;
  @Input() color: string | undefined;
  @Input() labelColor: string | undefined;
  @Input() disabled: boolean | undefined;
  @Input() isLoading: boolean | undefined;

  @Output() onHandleClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  handleClick(): void {
    this.onHandleClick.emit();
  }

  ngOnInit(): void {}
}
