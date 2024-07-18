import { Component } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ScrollToTopButtonComponent } from '../../shared/scroll-to-top-button/scroll-to-top-button.component';

@Component({
  selector: 'app-controle-de-qualidade',
  standalone: true,
  imports: [DashboardComponent, ScrollToTopButtonComponent],
  templateUrl: './controle-de-qualidade.component.html',
  styleUrl: './controle-de-qualidade.component.scss'
})
export class ControleDeQualidadeComponent {

}
