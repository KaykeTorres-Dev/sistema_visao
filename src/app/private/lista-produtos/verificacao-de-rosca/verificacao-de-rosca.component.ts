import { Component } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ScrollToTopButtonComponent } from '../../shared/scroll-to-top-button/scroll-to-top-button.component';

@Component({
  selector: 'app-verificacao-de-rosca',
  standalone: true,
  imports: [DashboardComponent, ScrollToTopButtonComponent],
  templateUrl: './verificacao-de-rosca.component.html',
  styleUrl: './verificacao-de-rosca.component.scss'
})
export class VerificacaoDeRoscaComponent {

}
