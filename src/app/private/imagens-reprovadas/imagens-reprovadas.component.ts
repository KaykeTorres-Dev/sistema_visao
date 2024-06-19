import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../shared/modal/modal.component';

@Component({
  selector: 'app-imagens-reprovadas',
  standalone: true,
  imports: [DashboardComponent, CommonModule, ModalComponent],
  templateUrl: './imagens-reprovadas.component.html',
  styleUrl: './imagens-reprovadas.component.scss'
})
export class ImagensReprovadasComponent {
  imagensReprovadas = [
    {id: 1, imagePath: 'assets/camera-images/reprovadas/image1.bmp', titulo: 'Imagem 1'},
    {id: 2, imagePath: 'assets/camera-images/reprovadas/image1.bmp', titulo: 'Imagem 2'},
    {id: 3, imagePath: 'assets/camera-images/reprovadas/image1.bmp', titulo: 'Imagem 3'},
    {id: 4, imagePath: 'assets/camera-images/reprovadas/image1.bmp', titulo: 'Imagem 4'},
    {id: 5, imagePath: 'assets/camera-images/reprovadas/image1.bmp', titulo: 'Imagem 5'},
    {id: 6, imagePath: 'assets/camera-images/reprovadas/image1.bmp', titulo: 'Imagem 6'},
    {id: 7, imagePath: 'assets/camera-images/reprovadas/image1.bmp', titulo: 'Imagem 7'},
    {id: 8, imagePath: 'assets/camera-images/reprovadas/image1.bmp', titulo: 'Imagem 8'},
    {id: 9, imagePath: 'assets/camera-images/reprovadas/image1.bmp', titulo: 'Imagem 9'},
    {id: 10, imagePath: 'assets/camera-images/reprovadas/image1.bmp', titulo: 'Imagem 10'},
    {id: 11, imagePath: 'assets/camera-images/reprovadas/image1.bmp', titulo: 'Imagem 11'},
    {id: 12, imagePath: 'assets/camera-images/reprovadas/image1.bmp', titulo: 'Imagem 12'}
  ];

}
