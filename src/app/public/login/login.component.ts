import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl ('', [Validators.required, Validators.email]),
      password: new FormControl ('', [Validators.required, Validators.maxLength(8)]),
    });
  }

  login() {
    const emailValue = 'admin@admin.com';
    const passwordValue = '321321';
    
    if (this.form.get('email')?.value == emailValue && this.form.get('password')?.value == passwordValue) {
      console.log('login efetuado com sucesso!!!');
      
      this.router.navigate(['/home']);
    } else {
      console.log('Login inválido!');
    }
  }
}
