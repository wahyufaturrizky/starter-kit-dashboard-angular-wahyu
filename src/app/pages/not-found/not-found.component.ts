import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent implements OnInit {
  isAuthenticated: boolean | string = false;

  constructor() {}

  checkIsAuthenticated(): void {
    const res = localStorage.getItem('userData');
    this.isAuthenticated = res ?? false;
  }

  ngOnInit(): void {
    this.checkIsAuthenticated();
  }
}
