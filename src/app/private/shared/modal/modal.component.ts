import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit {
  imagesList: any[] = [];

  @Input() images: any;
  selectedImage: any[] = [];
  viewImage: boolean = false;

  ngOnInit(): void {
    // debugger
    this.images.forEach((image: any) => {
      this.imagesList.push(image.path);
    });
    // console.log('onInit', this.imagesList);
  }


  onImageClick(image: any) {
    // debugger
    console.log('image', image);
    if (image.length > 1) {
      const teste = [...image].pop();
      const lista = [];
      lista.push(teste);
      console.log('imagem', lista);
     this.selectedImage = lista;
    } else {
      this.selectedImage = image;
    }



    // const numeros = [1, 2, 3, 4, 5];
    // const ultimoNumero = [...numeros].pop(); // Desestruturação e usando pop()
    // console.log(ultimoNumero); // Resultado: 5
    // console.log(numeros); // Resultado: [1, 2, 3, 4, 5] (O array original permanece inalterado)

    // debugger
    // if (image.length > 1) {
    //   const teste = image.pop();
    //   this.selectedImage.push(teste);
    //   console.log('selectedImage', this.selectedImage);
    // } else {
    //   this.selectedImage = image;
    //   console.log('selectedImage', this.selectedImage);
    // }


    // this.viewImage = true; // Defina viewImage como true para mostrar o modal
  }

  closeModal() {
    this.selectedImage = []; // Defina selectedImage como null para limpar a seleção
    // this.viewImage = false; // Defina viewImage como false para ocultar o modal
  }
}
