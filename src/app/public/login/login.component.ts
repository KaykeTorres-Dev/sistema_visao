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


  constructor(
    private fb: FormBuilder,
    private toastService: ToastService,
    private authService: AuthServiceService
  ) {}

  //TODO: Fazer a validação dos campos visualmente
  ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl (null, [Validators.required, Validators.email]),
      password: new FormControl (null, [Validators.required, Validators.maxLength(8)]),
    });
  }

  login() {
    const adminEmail = 'admin@admin.com';
    const adminPassword = '321321';
    const email = this.form.get('email')?.value;
    const password = this.form.get('password')?.value;



    if (this.form.get('email')?.value == null && this.form.get('password')?.value == null || this.form.get('email')?.value == "" && this.form.get('password')?.value == "") {
      this.toastService.showDanger('Preencha todos os campos!');
      return;

    } else if (this.form.get('email')?.value == null || this.form.get('email')?.value == "") {
      this.toastService.showDanger('Preencha o email');
      return;

    } else if (this.form.get('password')?.value == null || this.form.get('password')?.value == "") {
      this.toastService.showDanger('Preencha a senha');
      return;
    }

    this.authService.login(adminEmail, adminPassword, email, password);
  }

  togglePassword() {
    if (this.passwordShow) {
      this.passwordShow = false;
    } else {
      this.passwordShow = true;
    }
  }
}
