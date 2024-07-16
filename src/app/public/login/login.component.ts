import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '../../toast/toast.service';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  passwordType: string = 'password';
  passwordShow: boolean = false;
  isFormInvalid: boolean | undefined;
  isEmailInvalid: boolean | undefined;

  constructor(
    private fb: FormBuilder,
    private toastService: ToastService,
    private authService: AuthServiceService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl (null, [Validators.required, Validators.email]),
      password: new FormControl (null, [Validators.required, Validators.maxLength(6)]),
    });
  }

  login() {
    const adminEmail = 'admin@admin.com';
    const adminPassword = '321321';
    const email = this.form.get('email')?.value;
    const password = this.form.get('password')?.value;

    const validationError = this.validateLoginForm(email, password);
    if (validationError) {
      this.isFormInvalid = true;
      this.toastService.showDanger(validationError);
      return;
    } else {
      this.isFormInvalid = false;
    }

    this.authService.login(adminEmail, adminPassword, email, password);
  }

  validateLoginForm(email: string | null, password: string | null): string | undefined {
    if ((email === null || email === '') && (password === null || password === '')) {
      return 'Preencha os campos!';
    } else if (email === null || email === '') {
      return 'Preencha o email!';
    } else if (password === null || password === '') {
      return 'Preencha a senha!';
    }
    return undefined;
  }

  checkEmail(email: string) {
    if (email.length > 0 && (email !== null || email !== '')) {
      if (this.form.get('email')?.valid) {
        this.isEmailInvalid = false;
      } else {
        this.isEmailInvalid = true;
      }
    } else {
      this.isEmailInvalid = false;
    }
  }

  togglePassword() {
    if (this.passwordShow) {
      this.passwordShow = false;
    } else {
      this.passwordShow = true;
    }
  }
}
