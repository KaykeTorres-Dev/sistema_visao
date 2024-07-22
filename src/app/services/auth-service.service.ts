import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(
    private router: Router,
    private toastService: ToastService,
    private crudService: CrudService
  ) { }


  async login(email: any, password: any) {
    const loginUser = {
      email: email,
      password: password
    }
    try {
      const login = await this.crudService.post('login-user', loginUser);

      if (login) {
        this.toastService.showSuccess('Login efetuado com sucesso');
        this.router.navigate(['home']);
      } 
    } catch (error: any) {
      this.toastService.showDanger('Login inválido!');
    }
  }
}
