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
  isPasswordMatch: boolean = false;

  constructor(
    private fb: FormBuilder,
    private toastService: ToastService,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl (null, [Validators.required, Validators.email]),
      empresa: new FormControl (null, Validators.required),
      senha: new FormControl (null, [Validators.required, Validators.minLength(6)]),
      confirmarSenha: new FormControl (null, [Validators.required, Validators.minLength(6)])
    });
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
      if (confirmPassword.length > 0) {
        if (password !== confirmPassword) {
          this.toastService.showDanger('As senhas não são iguais!');
          this.isPasswordMatch = false;
        } else {
          this.isPasswordMatch = true;
        }
      }
    } else {
      this.toastService.showDanger('Preencha a senha primeiro!');
    }
  }

  createUser() {
    if (!this.form.valid || !this.isPasswordMatch) {
      this.toastService.showDanger('Formulário Inválido!');
    } else {
      this.toastService.showSuccess('Conta criada com sucesso!');
      this.router.navigate(['/login']);
    }
  }
}
