import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-outlined-block',
  templateUrl: './button-outlined-block.component.html',
  styleUrls: ['./button-outlined-block.component.css'],
})
export class ButtonOutlinedBlockComponent implements OnInit {
  @Input() isLoading: boolean | undefined;
  @Input() label: string | undefined;
  @Output() onHandleClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  handleClick(): void {
    this.onHandleClick.emit();
  }

  ngOnInit(): void {}
}
