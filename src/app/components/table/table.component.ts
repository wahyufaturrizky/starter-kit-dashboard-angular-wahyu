import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResUserInterce } from '@app/interface/UserInterface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() dataTable: Array<ResUserInterce> | undefined;

  @Output() onHandleView: EventEmitter<any> = new EventEmitter();
  @Output() onHandleEdit: EventEmitter<any> = new EventEmitter();
  @Output() onHandleDelete: EventEmitter<any> = new EventEmitter();

  constructor() {}

  handleView(data: ResUserInterce): void {
    this.onHandleView.emit(data);
  }

  handleEdit(data: ResUserInterce): void {
    this.onHandleEdit.emit(data);
  }

  handleDelete(data: ResUserInterce): void {
    this.onHandleDelete.emit(data);
  }

  ngOnInit(): void {}
}
