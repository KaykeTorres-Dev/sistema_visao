import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../shared/modal/modal.component';
import { ScrollToTopButtonComponent } from '../shared/scroll-to-top-button/scroll-to-top-button.component';

@Component({
  selector: 'app-imagens-aprovadas',
  standalone: true,
  imports: [DashboardComponent, CommonModule, ModalComponent, ScrollToTopButtonComponent],
  templateUrl: './imagens-aprovadas.component.html',
  styleUrl: './imagens-aprovadas.component.scss',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class ImagensAprovadasComponent {
  urls: any = [];
  fileName: string = '';
  fileCreationData: any;

  selectFile(file: any) {
    if (file.target.files && file.target.files.length > 0) {
      for (let i = 0; i < file.target.files.length; i++) {
        const element = file.target.files[i];
        const fileName = element.name;
        const fileCreationData = element.lastModifiedDate;

        if (element.type.startsWith('image/')) { // Validação opcional do tipo de arquivo
          const reader = new FileReader();
          reader.readAsDataURL(element);
          reader.onload = (events: any) => {
            const path = events.target.result;
            this.urls.push({ path, fileName, fileCreationData });
          };
        }
      }
    }
  }

}



