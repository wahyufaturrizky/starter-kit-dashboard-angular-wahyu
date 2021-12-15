import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalInterface } from '@app/interface/ModalInterface';
import {
  FormInterface,
  ReqRegisterInterface,
} from '@app/interface/UserInterface';
import { AuthService } from '@app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  dataForm: ReqRegisterInterface | undefined;
  isLoading: boolean = false;
  isRegister: boolean = false;
  modal: ModalInterface = {
    isShow: false,
    headerTitle: '',
    message: '',
  };
  form: FormInterface[] = [
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
  ];

  isFormrRegister(): void {
    this.isRegister = true;
    this.form = [
      ...this.form,
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
    ];
  }

  isFormrLogin(): void {
    this.isRegister = false;
    this.form = [
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
    ];
  }

  onHandleRegister(): void {
    if (!this.isRegister) {
      this.isFormrRegister();
    } else {
      this.isFormrLogin();
    }
  }

  onhandleCloseModal(data: boolean): void {
    this.modal = { ...this.modal, isShow: data };
  }

  onHandleChange(data: any): void {
    this.dataForm = { ...this.dataForm, [data.target.name]: data.target.value };
  }

  handleSubmit(): void {
    this.isLoading = true;

    if (this.isRegister) {
      this.authService
        .PostRegister({ ...this.dataForm, isActive: false })
        .subscribe(
          (data) => {
            this.isLoading = false;
            this.isFormrLogin();
            this.modal = {
              isShow: true,
              headerTitle: 'Success register',
              message: 'Please login ' + data?.username,
            };
          },
          (err) => {
            this.isLoading = false;
            this.modal = {
              isShow: true,
              headerTitle: 'Faield register',
              message: err.error.message,
            };
          },
          () => console.log('finish postregister')
        );
    } else {
      this.authService.PostLogin(this.dataForm).subscribe(
        (data) => {
          this.isLoading = false;
          localStorage.setItem('userData', JSON.stringify(data));
          this.modal = {
            isShow: true,
            headerTitle: 'Success login',
            message: 'welcome, ' + data?.username,
          };
        },
        (err) => {
          this.isLoading = false;
          this.modal = {
            isShow: true,
            headerTitle: 'Faield login',
            message: err.error.message,
          };
        },
        () => {
          this.modal = {
            ...this.modal,
            isShow: false,
          };
          this.router.navigate(['/users']);
        }
      );
    }
  }

  isAuthenticated(): void {
    const res = localStorage.getItem('userData');
    if (res) {
      this.router.navigate(['users']);
    }
  }

  ngOnInit(): void {
    this.isAuthenticated();
  }
}
