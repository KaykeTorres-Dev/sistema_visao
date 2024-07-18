import { Component } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ScrollToTopButtonComponent } from '../../shared/scroll-to-top-button/scroll-to-top-button.component';

@Component({
  selector: 'app-leitor-de-caracteres',
  standalone: true,
  imports: [DashboardComponent, ScrollToTopButtonComponent],
  templateUrl: './leitor-de-caracteres.component.html',
  styleUrl: './leitor-de-caracteres.component.scss'
})
export class LeitorDeCaracteresComponent {

}
