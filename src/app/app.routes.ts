import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { HomeComponent } from './private/home/home.component';
import { ImagensAprovadasComponent } from './private/imagens-aprovadas/imagens-aprovadas.component';
import { ImagensReprovadasComponent } from './private/imagens-reprovadas/imagens-reprovadas.component';
import { ProdutosComponent } from './private/lista-produtos/produtos/produtos.component';
import { ConferenciaDeEmbalagensComponent } from './private/lista-produtos/conferencia-de-embalagens/conferencia-de-embalagens.component';
import { ControleDeQualidadeComponent } from './private/lista-produtos/controle-de-qualidade/controle-de-qualidade.component';
import { IdentificacaoDeIrregularidadesBocalOuTampasComponent } from './private/lista-produtos/identificacao-de-irregularidades-bocal-ou-tampas/identificacao-de-irregularidades-bocal-ou-tampas.component';
import { InspecaoDeRotulosTampasENivelDeProdutoComponent } from './private/lista-produtos/inspecao-de-rotulos-tampas-e-nivel-de-produto/inspecao-de-rotulos-tampas-e-nivel-de-produto.component';
import { LeitorDeCaracteresComponent } from './private/lista-produtos/leitor-de-caracteres/leitor-de-caracteres.component';
import { MaquinaDeCubagemPesagemEIdentificacaoComponent } from './private/lista-produtos/maquina-de-cubagem-pesagem-e-identificacao/maquina-de-cubagem-pesagem-e-identificacao.component';
import { MedicaoDeVolumeComponent } from './private/lista-produtos/medicao-de-volume/medicao-de-volume.component';
import { QualidadeEMedicaoDePneusComponent } from './private/lista-produtos/qualidade-e-medicao-de-pneus/qualidade-e-medicao-de-pneus.component';
import { QuantificacaoDeGarrafasComponent } from './private/lista-produtos/quantificacao-de-garrafas/quantificacao-de-garrafas.component';
import { VerificacaoDeRoscaComponent } from './private/lista-produtos/verificacao-de-rosca/verificacao-de-rosca.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'produtos/quantificacao-de-garrafas-em-engradados', component: QuantificacaoDeGarrafasComponent },
  { path: 'produtos/verificacao-de-rosca-interna-e-externa', component: VerificacaoDeRoscaComponent },
  { path: 'produtos/qualidade-e-medicao-de-pneus', component: QualidadeEMedicaoDePneusComponent },
  { path: 'produtos/medicao-de-volume-em-processo-continuo', component: MedicaoDeVolumeComponent },
  { path: 'produtos/controle-de-qualidade-na-fabricacao-de-biscoitos', component: ControleDeQualidadeComponent },
  { path: 'produtos/inspecao-de-rotulos-tampas-e-nivel-de-produto', component: InspecaoDeRotulosTampasENivelDeProdutoComponent },
  { path: 'produtos/conferencia-de-embalagens', component: ConferenciaDeEmbalagensComponent },
  { path: 'produtos/identificacao-de-irregularidades-em-bocal-ou-tampas', component: IdentificacaoDeIrregularidadesBocalOuTampasComponent },
  { path: 'produtos/leitor-de-caracteres-em-qualquer-material', component: LeitorDeCaracteresComponent },
  { path: 'produtos/maquina-de-cubagem-pesagem-e-identificacao', component: MaquinaDeCubagemPesagemEIdentificacaoComponent },
  { path: 'imagens-aprovadas', component: ImagensAprovadasComponent },
  { path: 'imagens-reprovadas', component: ImagensReprovadasComponent },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutes {}
