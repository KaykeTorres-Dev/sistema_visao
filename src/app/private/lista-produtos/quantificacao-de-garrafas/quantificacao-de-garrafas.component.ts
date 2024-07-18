import { Component } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ScrollToTopButtonComponent } from '../../shared/scroll-to-top-button/scroll-to-top-button.component';

@Component({
  selector: 'app-quantificacao-de-garrafas',
  standalone: true,
  imports: [DashboardComponent, ScrollToTopButtonComponent],
  templateUrl: './quantificacao-de-garrafas.component.html',
  styleUrl: './quantificacao-de-garrafas.component.scss'
})
export class QuantificacaoDeGarrafasComponent {

}
