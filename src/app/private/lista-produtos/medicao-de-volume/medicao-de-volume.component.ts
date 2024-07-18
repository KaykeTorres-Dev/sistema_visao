import { Component } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ScrollToTopButtonComponent } from '../../shared/scroll-to-top-button/scroll-to-top-button.component';

@Component({
  selector: 'app-medicao-de-volume',
  standalone: true,
  imports: [DashboardComponent, ScrollToTopButtonComponent],
  templateUrl: './medicao-de-volume.component.html',
  styleUrl: './medicao-de-volume.component.scss'
})
export class MedicaoDeVolumeComponent {

}
