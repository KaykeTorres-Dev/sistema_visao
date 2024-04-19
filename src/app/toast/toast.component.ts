import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { ToastService } from './toast.service';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule, NgbToastModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  @HostBinding('class') toastContainer = 'toast-container position-fixed top-0 end-0 p-3';
  
  constructor(public toastService: ToastService) {}
}


 
