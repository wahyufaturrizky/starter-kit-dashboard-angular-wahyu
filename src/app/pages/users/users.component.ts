import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private router: Router) {}

  handleLogout(): void {
    localStorage.removeItem('userData');
    this.router.navigate(['/']);
  }

  checkIsAuthenticated(): void {
    const res = localStorage.getItem('userData');
    res ? undefined : this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.checkIsAuthenticated();
  }
}
