import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalInterface } from '@app/interface/ModalInterface';
import {
  ReqRegisterInterface,
  ResUserInterce,
} from '@app/interface/UserInterface';
import { AuthService } from '@app/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  dataTable: Array<ResUserInterce> = [];
  isLoading: boolean = false;
  formData: ReqRegisterInterface | undefined;
  modal: ModalInterface = {
    isShow: false,
    headerTitle: '',
    message: '',
    dataRow: undefined,
    listMenu: [],
  };

  handleLogout(): void {
    localStorage.removeItem('userData');
    this.router.navigate(['/']);
  }

  checkIsAuthenticated(): void {
    const res = localStorage.getItem('userData');
    res ? undefined : this.router.navigate(['/']);
  }

  onhandleCloseModal(data: boolean): void {
    this.modal = { ...this.modal, isShow: data };
  }

  getListUsers(): void {
    this.isLoading = true;
    this.authService.GetLitUsers().subscribe(
      (data) => {
        this.dataTable = data;
        this.isLoading = false;
      },
      (err) => {
        this.isLoading = false;
        this.modal = {
          isShow: true,
          headerTitle: 'Warning Message',
          message: err.error.message,
        };
      },
      () => console.log('finish fetch list users')
    );
  }

  onHandleEdit(data: ResUserInterce): void {
    this.modal = {
      ...this.modal,
      isShow: true,
      dataRow: data,
      message: '',
      headerTitle: 'EDIT',
      listMenu: [
        {
          fieldLabel: 'Username',
          fieldName: 'username',
          fieldPlaceholder: 'Please fill username',
          fieldType: 'text',
          required: true,
          defaultValue: data.username,
        },
        {
          fieldLabel: 'First Name',
          fieldName: 'firstName',
          fieldPlaceholder: 'Please fill first name',
          fieldType: 'text',
          required: true,
          defaultValue: data.firstName,
        },
        {
          fieldLabel: 'Last Name',
          fieldName: 'lastName',
          fieldPlaceholder: 'Please fill last name',
          fieldType: 'text',
          required: true,
          defaultValue: data.lastName,
        },
        {
          fieldLabel: 'Email',
          fieldName: 'email',
          fieldPlaceholder: 'Please fill email',
          fieldType: 'email',
          required: true,
          defaultValue: data.email,
        },
        {
          fieldLabel: 'Phone Number',
          fieldName: 'phoneNumber',
          fieldPlaceholder: 'Please fill phone number',
          fieldType: 'number',
          required: true,
          defaultValue: data.phoneNumber,
        },
      ],
    };
  }

  handleAdd(): void {
    this.modal = {
      ...this.modal,
      isShow: true,
      headerTitle: 'ADD',
      listMenu: [
        {
          fieldLabel: 'Username',
          fieldName: 'username',
          fieldPlaceholder: 'Please fill username',
          fieldType: 'text',
          required: true,
          defaultValue: '',
        },
        {
          fieldLabel: 'Password',
          fieldName: 'password',
          fieldPlaceholder: 'Please fill password',
          fieldType: 'password',
          required: true,
          defaultValue: '',
        },
        {
          fieldLabel: 'First Name',
          fieldName: 'firstName',
          fieldPlaceholder: 'Please fill first name',
          fieldType: 'text',
          required: true,
          defaultValue: '',
        },
        {
          fieldLabel: 'Last Name',
          fieldName: 'lastName',
          fieldPlaceholder: 'Please fill last name',
          fieldType: 'text',
          required: true,
          defaultValue: '',
        },
        {
          fieldLabel: 'Email',
          fieldName: 'email',
          fieldPlaceholder: 'Please fill email',
          fieldType: 'email',
          required: true,
          defaultValue: '',
        },
        {
          fieldLabel: 'Phone Number',
          fieldName: 'phoneNumber',
          fieldPlaceholder: 'Please fill phone number',
          fieldType: 'number',
          required: true,
          defaultValue: '',
        },
      ],
    };
  }

  handleUpdate(): void {
    this.isLoading = true;
    let data = {
      ...this.formData,
      isActive: false,
    };
    this.authService.PutUser(data, this.modal.dataRow?.id).subscribe(
      (data) => {
        this.isLoading = false;
        this.modal = {
          ...this.modal,
          isShow: true,
          headerTitle: 'Success Update',
          message: 'Success update data' + data.username,
        };
      },
      (err) => {
        this.isLoading = false;
        this.modal = {
          ...this.modal,
          isShow: true,
          headerTitle: 'Failed Update',
          message: err.error.message,
        };
      },
      () => this.getListUsers()
    );
  }

  onHandleChange(data: any): void {
    this.formData = { ...this.formData, [data.target.name]: data.target.value };
  }

  handleAddData(): void {
    this.isLoading = true;
    let data = {
      ...this.formData,
      isActive: false,
    };
    this.authService.PostRegister(data).subscribe(
      (data) => {
        this.isLoading = false;
        this.modal = {
          ...this.modal,
          isShow: true,
          headerTitle: 'Success Update',
          message: 'Success update data' + data.username,
        };
      },
      (err) => {
        this.isLoading = false;
        this.modal = {
          ...this.modal,
          isShow: true,
          headerTitle: 'Failed Update',
          message: err.error.message,
        };
      },
      () => this.getListUsers()
    );
  }

  onHandleDelete(data: ResUserInterce): void {
    this.modal = {
      ...this.modal,
      isShow: true,
      headerTitle: 'DELETE',
      dataRow: data,
      message: 'Are you sure want to delete this data?',
    };
  }

  onHandleView(data: ResUserInterce): void {
    this.modal = {
      ...this.modal,
      isShow: true,
      headerTitle: 'VIEW',
      dataRow: data,
      message: '',
    };
  }

  onDelete(): void {
    this.isLoading = true;
    this.authService.DeleteUser(this.modal.dataRow?.id).subscribe(
      (data) => {
        this.isLoading = false;
        this.modal = {
          ...this.modal,
          isShow: true,
          headerTitle: 'Success Delete',
          message: 'Success delete this data',
        };
      },
      (err) => {
        this.isLoading = false;
        this.modal = {
          ...this.modal,
          isShow: true,
          headerTitle: 'Failed Delete',
          message: err.error.message,
        };
      },
      () => this.getListUsers()
    );
  }

  ngOnInit(): void {
    this.checkIsAuthenticated();
    this.getListUsers();
  }
}
