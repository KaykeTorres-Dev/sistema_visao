import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(
    private router: Router,
    private toastService: ToastService,
  ) { }


  login(adminEmail: string, adminPassword: any, email: any, password: any) {

    if (email == adminEmail && password == adminPassword) {
      this.toastService.showSuccess('Login efetuado com sucesso');
      this.router.navigate(['home']);
    } else {
      this.toastService.showDanger('Login inválido!');
    }

  }
}
