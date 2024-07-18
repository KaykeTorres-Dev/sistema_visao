import { Component } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ScrollToTopButtonComponent } from '../../shared/scroll-to-top-button/scroll-to-top-button.component';

@Component({
  selector: 'app-maquina-de-cubagem-pesagem-e-identificacao',
  standalone: true,
  imports: [DashboardComponent, ScrollToTopButtonComponent],
  templateUrl: './maquina-de-cubagem-pesagem-e-identificacao.component.html',
  styleUrl: './maquina-de-cubagem-pesagem-e-identificacao.component.scss'
})
export class MaquinaDeCubagemPesagemEIdentificacaoComponent {

}
