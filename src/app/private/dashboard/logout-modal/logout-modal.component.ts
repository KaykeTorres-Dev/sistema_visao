import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../../../toast/toast.service';

@Component({
  selector: 'app-logout-modal',
  standalone: true,
  imports: [],
  templateUrl: './logout-modal.component.html',
  styleUrl: './logout-modal.component.scss'
})
export class LogoutModalComponent {
  constructor(
    private router: Router,
    private toastService: ToastService) {
  }

  goToLogin() {
    this.router.navigate(['login']);
    this.toastService.showSuccess('Logout realizado com sucesso!');
  }
}
