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
  isOptionSelected: boolean = false;
  
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
      atendimento: new FormControl (false),
      comunicacao: new FormControl (false),
      planejamento: new FormControl (false),
      suporte: new FormControl (false)
    });
  }

  onAreaFeedbackChange(optionValue: any) {
    if (optionValue == true) {
      optionValue = false;
    } else if (optionValue == false) {
      optionValue = true;
    }
    this.isOptionSelected = optionValue;
  }

  
  sendFeedback() {
    if (!this.form.valid || this.isOptionSelected !== true) {
      this.toastService.showDanger('Formulário Inválido!');
    } else {
      this.toastService.showSuccess('Feedback enviado com sucesso!');
      this.router.navigate(['/home']);
    }
  }
}
