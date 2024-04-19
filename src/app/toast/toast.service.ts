import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor() {}

  toasts: any[] = [];

  delayTime: number = 5000;

  classToast = {
    success: 'bg-success text-light semi-bold',
    info: 'bg-info text-light semi-bold',
    warning: 'bg-warning text-light semi-bold',
    danger: 'bg-danger text-light semi-bold',
  };

  showInfo(message: string) {
    this.show(message, { classname: this.classToast.info });
  }

  showSuccess(message: string) {
    this.show(message, { classname: this.classToast.success });
  }

  showWarning(message: string) {
    this.show(message, { classname: this.classToast.warning });
  }

  showDanger(message: string) {
    this.show(message, { classname: this.classToast.danger });
  }

  show(message: string, options: any = {}) {
    if (!options.delay) {
      options.delay = this.delayTime;
    }

    this.toasts.push({ message, ...options });
  }

  remove(toast: any) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }

  clear() {
    this.toasts.splice(0, this.toasts.length);
  }
}
