import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalInterface } from '@app/interface/ModalInterface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Output() onhandleCloseModal: EventEmitter<any> = new EventEmitter();
  @Input() modal: ModalInterface | undefined;
  @Input() widthModal: string | undefined;

  constructor() {}

  handleCloseModal(data: any): void {
    this.onhandleCloseModal.emit(data);
  }

  ngOnInit(): void {}
}
