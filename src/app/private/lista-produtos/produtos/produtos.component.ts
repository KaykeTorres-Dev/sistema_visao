import { Component } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { Router } from '@angular/router';
import { ScrollToTopButtonComponent } from '../../shared/scroll-to-top-button/scroll-to-top-button.component';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [DashboardComponent, ScrollToTopButtonComponent],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent {

  constructor(public router: Router) {}

  goToProduct1() {
    this.router.navigate(['produtos/quantificacao-de-garrafas-em-engradados']);
  }

  goToProduct2() {
    this.router.navigate(['produtos/verificacao-de-rosca-interna-e-externa']);
  }

  goToProduct3() {
    this.router.navigate(['produtos/qualidade-e-medicao-de-pneus']);
  }

  goToProduct4() {
    this.router.navigate(['produtos/medicao-de-volume-em-processo-continuo']);
  }

  goToProduct5() {
    this.router.navigate(['produtos/controle-de-qualidade-na-fabricacao-de-biscoitos']);
  }

  goToProduct6() {
    this.router.navigate(['produtos/inspecao-de-rotulos-tampas-e-nivel-de-produto']);
  }

  goToProduct7() {
    this.router.navigate(['produtos/conferencia-de-embalagens']);
  }

  goToProduct8() {
    this.router.navigate(['produtos/identificacao-de-irregularidades-em-bocal-ou-tampas']);
  }

  goToProduct9() {
    this.router.navigate(['produtos/leitor-de-caracteres-em-qualquer-material']);
  }

  goToProduct10() {
    this.router.navigate(['produtos/maquina-de-cubagem-pesagem-e-identificacao']);
  }
}
