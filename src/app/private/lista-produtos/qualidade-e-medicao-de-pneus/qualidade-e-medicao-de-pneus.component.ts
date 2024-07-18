import { Component } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ScrollToTopButtonComponent } from '../../shared/scroll-to-top-button/scroll-to-top-button.component';

@Component({
  selector: 'app-qualidade-e-medicao-de-pneus',
  standalone: true,
  imports: [DashboardComponent, ScrollToTopButtonComponent],
  templateUrl: './qualidade-e-medicao-de-pneus.component.html',
  styleUrl: './qualidade-e-medicao-de-pneus.component.scss'
})
export class QualidadeEMedicaoDePneusComponent {

}
