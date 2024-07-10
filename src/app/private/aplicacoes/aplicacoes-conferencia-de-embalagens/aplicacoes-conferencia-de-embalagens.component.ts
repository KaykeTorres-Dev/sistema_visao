import { Component } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';

@Component({
  selector: 'app-aplicacoes-conferencia-de-embalagens',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './aplicacoes-conferencia-de-embalagens.component.html',
  styleUrl: './aplicacoes-conferencia-de-embalagens.component.scss'
})
export class AplicacoesConferenciaDeEmbalagensComponent {
  url: string = '';


  selectFile(file: any) {
    if (file.target.files) {
      let reader = new FileReader();
      reader.readAsDataURL(file.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
    }
  }
}
