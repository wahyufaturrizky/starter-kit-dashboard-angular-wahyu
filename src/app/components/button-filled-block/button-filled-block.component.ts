import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-filled-block',
  templateUrl: './button-filled-block.component.html',
  styleUrls: ['./button-filled-block.component.css'],
})
export class ButtonFilledBlockComponent implements OnInit {
  @Input() label: string | undefined;
  @Input() color: string | undefined;
  @Input() labelColor: string | undefined;
  @Input() disabled: boolean | undefined;
  @Input() isLoading: boolean | undefined;

  constructor() {}

  ngOnInit(): void {}
}
