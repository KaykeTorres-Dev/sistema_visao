import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '../../toast/toast.service';

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
    private router: Router,
    private toastService: ToastService
  ) {}

  //TODO: Fazer a validação dos campos visualmente
  ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl (null, [Validators.required, Validators.email]),
      password: new FormControl (null, [Validators.required, Validators.maxLength(8)]),
    });
  }

  login() {
    const emailValue = 'admin@admin.com';
    const passwordValue = '321321';

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
      
    if (this.form.get('email')?.value == emailValue && this.form.get('password')?.value == passwordValue) {
      this.toastService.showSuccess('Login efetuado com sucesso');
      this.router.navigate(['home']);
    } else {
      this.toastService.showDanger('Login inválido!');
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
