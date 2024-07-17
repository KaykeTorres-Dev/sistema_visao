import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastService } from '../../toast/toast.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-acesso-camera',
  standalone: true,
  imports: [DashboardComponent, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './acesso-camera.component.html',
  styleUrl: './acesso-camera.component.scss'
})
export class AcessoCameraComponent implements OnInit {
  showCameraStreaming: boolean = false;
  cameraPath: any;
  form!: FormGroup;
  isFormInvalid: boolean | undefined;
  isIpAddressInvalid: boolean | undefined;
  fileContent: any;
  hasFileContent: boolean = false;
  showLoading: boolean = false;
  showIhm: boolean = false;
  urlCamera: any;

  constructor(
    private fb: FormBuilder,
    private toastService: ToastService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      ipAddress: new FormControl (null, [Validators.required,
        Validators.pattern("^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$")])
    });
  }

  async connectCamera() {
    if (!this.form.valid && this.form.get('ipAddress')?.value == null || this.form.get('ipAddress')?.value == '') {
      this.isFormInvalid = true;
      this.toastService.showDanger('Preencha o campo abaixo!');
      return;
    }

    this.isFormInvalid = false;
    this.urlCamera = 'http://' + this.form.get('ipAddress')?.value + '/pages/hmi/';
    this.cameraPath = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlCamera);
    this.showCameraStreaming = true;
    this.showLoading = true;

    try {
      await this.establishCameraConnection();
      this.showLoading = false;
      this.showIhm = true;
    } catch (error) {
      this.showLoading = false;
      this.showIhm = false;
    }
  }

  establishCameraConnection(): Promise<void> {
    return new Promise((resolve, reject) => {
      fetch(this.urlCamera).then(data => {
          if (data) {
            resolve();
            this.showSuccessToast();
          } else {
            reject();
            this.showErrorToast();
          }
        }).catch(error => {
          reject(error);
          this.showErrorToast();
        });
    });
  }




  showSuccessToast() {
    this.toastService.showSuccess('Câmera conectada com sucesso!');
  }

  showErrorToast() {
    this.toastService.showDanger('Não foi possível conectar a câmera. Tente novamente!');
  }

  async reloadCameraConnection() {
    await this.connectCamera();
  }

  checkIpAddress(value: string) {
    if (value.length > 0 && !this.form.valid) {
      this.isIpAddressInvalid = true;
    } else if((value.length == 11 || value.length <= 15) && this.form.valid) {
      this.isIpAddressInvalid = false;
    } else {
      this.isIpAddressInvalid = undefined;
    }
  }


  selectFile(fileList: any) {
    let file = fileList.target.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = (events: any) => {
      this.fileContent = events.target.result;
      if (this.fileContent !== undefined) {
        this.hasFileContent = true;
      } else {
        this.hasFileContent = false;
      }
      // console.log('this.fileContent', this.fileContent );
    }
    fileReader.readAsText(file);



    // let fileValue = [];

    // fileValue = this.fileContent;
    // for (let i = 0; i < fileValue.length; i++) {
    //   const element = fileValue[i];
    //   console.log('file', element);

    // }
  }
}
