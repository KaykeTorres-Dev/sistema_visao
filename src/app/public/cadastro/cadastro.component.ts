import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastService } from '../../toast/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit {
  form!: FormGroup;
  passwordType: string = 'password';
  passwordShow: boolean = false;
  confirmPasswordShow: boolean = false;
  confirmPasswordType: string = 'password';
  isPasswordMatch: boolean | undefined;
  isFormInvalid: boolean | undefined;
  isEmailInvalid: boolean | undefined;
  isCompanyInvalid: boolean = false;
  isPasswordInvalid: boolean = false;
  isConfirmPasswordInvalid: boolean = false;
  isConfirmPasswordEmpty: boolean = false;

  constructor(
    private fb: FormBuilder,
    private toastService: ToastService,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl (null, [Validators.required, Validators.email]),
      company: new FormControl (null, Validators.required),
      password: new FormControl (null, [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl (null, Validators.required)
    });
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
      this.passwordType = 'password';
    } else {
      this.passwordShow = true;
      this.passwordType = 'text';
    }
  }

  toggleConfirmPassword() {
    if (this.confirmPasswordShow) {
      this.confirmPasswordShow = false;
      this.confirmPasswordType = 'password';
    } else {
      this.confirmPasswordShow = true;
      this.confirmPasswordType = 'text';
    }
  }

  passwordMatchCheck(password: any, confirmPassword: any) {
    if (password !== null && password !== '') {
      this.isConfirmPasswordInvalid = false;

      if (confirmPassword.length > 0) {
        this.isConfirmPasswordEmpty = false;

        if (password !== confirmPassword) {
          this.isPasswordMatch = false;

        } else {
          this.isPasswordMatch = true;
        }
      } else {
        this.isPasswordMatch = undefined;
        this.isConfirmPasswordEmpty = true;
      }
    } else {
      this.isPasswordMatch = undefined;
      this.isConfirmPasswordInvalid = true;
      this.toastService.showDanger('Preencha a senha primeiro!');
      this.isConfirmPasswordEmpty = true;
    }
  }

  checkPassword(password: any) {
    const confirmPassword = this.form.get('confirmPassword')?.value;

    if (password !== null && password !== '') {
      if (password.length > 0 && password.length < 6) {
        this.isPasswordInvalid = true;

      } else if (password.length >= 6) {
        this.isPasswordInvalid = false;

      } if (confirmPassword !== null && confirmPassword !== '') {
        if (password !== confirmPassword) {
          this.isPasswordMatch = false;
        } else {
          this.isPasswordMatch = true;
        }
      }

    } else if (confirmPassword !== null && confirmPassword !== '') {
      this.isPasswordInvalid = false;
      this.isFormInvalid = false;
    } else {
      this.isPasswordInvalid = false;
      this.isConfirmPasswordEmpty = false;
    }
  }

  validateCreateUserForm(email: string, company: string, password: string, confirmPassword: string): string | null {
    if ((email === null || email === '') && (company === null || company === '') && (password === null || password === '')
      && (confirmPassword === null || confirmPassword === '')) {
      return 'Preencha os campos abaixo!';

    } else if ((email === null || email === '') || (company === null || company === '') || (password === null || password === '')
      || (confirmPassword === null || confirmPassword === '')) {
      return 'Formulário inválido!';
    }
    return null;
  }

  createUser() {
    const email = this.form.get('email')?.value;
    const company = this.form.get('company')?.value;
    const password = this.form.get('password')?.value;
    const confirmPassword = this.form.get('confirmPassword')?.value;

    const validationError = this.validateCreateUserForm(email, company, password, confirmPassword);
    if (validationError) {
      this.isFormInvalid = true;
      this.toastService.showDanger(validationError);
      return;
    } else {
      this.isFormInvalid = false;
      this.router.navigate(['/login']);
      this.toastService.showSuccess('Conta criada com sucesso!');
    }
  }
}
