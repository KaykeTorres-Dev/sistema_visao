import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastService } from '../../../toast/toast.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ScrollToTopButtonComponent } from "../../shared/scroll-to-top-button/scroll-to-top-button.component";

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [DashboardComponent, CommonModule, FormsModule, ReactiveFormsModule, ScrollToTopButtonComponent],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent implements OnInit {
  form!: FormGroup;
  isOptionSelected: boolean = false;
  isEmailInvalid: boolean | undefined;
  isFormInvalid: boolean | undefined;
  isFeedbackInputInvalid: boolean | undefined;

  constructor(
    private fb: FormBuilder,
    private toastService: ToastService,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl (null, [Validators.required, Validators.email]),
      company: new FormControl (null, Validators.required),
      comment: new FormControl (null),
      rate: new FormControl (null,  Validators.required),
      service: new FormControl (false, Validators.required),
      communication: new FormControl (false, Validators.required),
      planning: new FormControl (false, Validators.required),
      support: new FormControl (false, Validators.required)
    });
  }

  checkEmail(email: string) {
    if (email.length > 0 && (email !== null || email !== '')) {
      if (this.form.get('email')?.valid) {
        this.isEmailInvalid = false;
      } else {
        this.isEmailInvalid = true;
      }
    } else {
      this.isEmailInvalid = false;
    }
  }

  onAreaFeedbackChange(optionValue: any) {
    if (optionValue == true) {
      optionValue = false;
      this.isFeedbackInputInvalid = true;
    } else if (optionValue == false) {
      optionValue = true;
      this.isFeedbackInputInvalid = false;
    }
    this.isOptionSelected = optionValue;
  }

  sendFeedback() {
    if (!this.form.valid || this.isOptionSelected !== true) {
      this.isFormInvalid = true;
      this.isOptionSelected == true ?  this.isFeedbackInputInvalid = false : this.isFeedbackInputInvalid = true;
      this.toastService.showDanger('Formulário Inválido!');
      return;
    } else {
      this.isFormInvalid = false;
      this.toastService.showSuccess('Feedback enviado com sucesso!');
      this.router.navigate(['/home']);
    }
  }
}
