import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListMenuInterface } from '@app/interface/ListMenuSideBarInterface';
import { ModalInterface } from '@app/interface/ModalInterface';

@Component({
  selector: 'app-wrapper-content',
  templateUrl: './wrapper-content.component.html',
  styleUrls: ['./wrapper-content.component.css'],
})
export class WrapperContentComponent implements OnInit {
  constructor(private router: Router) {}

  isHideSideBar: boolean = false;
  modal: ModalInterface = {
    isShow: false,
    headerTitle: '',
    message: '',
  };

  listMenu: ListMenuInterface[] = [
    {
      label: 'Users',
      icon: 'fas fa-user-friends',
      onClick: () => this.router.navigate(['/users']),
    },
    {
      label: 'Log Out',
      icon: 'fas fa-sign-out-alt',
      onClick: () => {
        this.modal = {
          isShow: true,
          headerTitle: 'Message Alert',
          message: 'Are you want to exit?',
        };
      },
    },
  ];

  onhandleCloseModal(e: any): void {
    this.modal = {
      ...this.modal,
      isShow: e,
    };
  }

  handleClose(): void {
    console.log('asdasd');

    localStorage.removeItem('userData');
    this.router.navigate(['/']);
  }

  checkRoute(): string {
    if (this.router.url === '/users') {
      return 'Users';
    } else {
      return '';
    }
  }

  ngOnInit(): void {
    this.checkRoute();
  }
}
