import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastService } from '../../../toast/toast.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [DashboardComponent, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent implements OnInit {
  form!: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private toastService: ToastService,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl (null, [Validators.required, Validators.email]),
      empresa: new FormControl (null, Validators.required),
      comentario: new FormControl (null),
      avaliacao: new FormControl (null,  Validators.required),
      atendimento: new FormControl (false, Validators.required),
      comunicação: new FormControl (false,  Validators.required),
      planejamento: new FormControl (false,  Validators.required),
      suporte: new FormControl (false, Validators.required)
    });
  }

  onAreaFeedbackChange(form: any) {
    const atendimentoControl = this.form.get('atendimento');
    const comunicaçãoControl = this.form.get('comunicação');
    const planejamentoControl = this.form.get('planejamento');
    const suporteControl = this.form.get('suporte');

    form.valueChanges.subscribe((value: boolean) => {
      debugger
      if (value !== false) {
        atendimentoControl?.removeValidators(Validators.required);
        comunicaçãoControl?.removeValidators(Validators.required);
        planejamentoControl?.removeValidators(Validators.required);
        suporteControl?.removeValidators(Validators.required);
      } 
    });
  }

  
  sendFeedback(form: FormControl) {
    console.log('controles do form', this.form.controls);
    console.log('form', form);

    if (!this.form.valid) {
      this.toastService.showDanger('Formulário Inválido!');
    } else {
      this.toastService.showSuccess('Feedback enviado com sucesso!');
      this.router.navigate(['/home']);
    }
  }
}
