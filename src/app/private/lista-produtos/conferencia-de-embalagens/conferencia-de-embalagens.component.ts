import { Component } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conferencia-de-embalagens',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './conferencia-de-embalagens.component.html',
  styleUrl: './conferencia-de-embalagens.component.scss'
})
export class ConferenciaDeEmbalagensComponent {
  constructor(private router: Router) {
  }

  goToApplication() {
    this.router.navigate(['/aplicacoes/conferencia-de-embalagens']);
  }
}
