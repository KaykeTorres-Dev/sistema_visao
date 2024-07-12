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
  fileContent: any;
  hasFileContent: boolean = false;

  constructor(
    private fb: FormBuilder,
    private toastService: ToastService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      enderecoIp: new FormControl (null, [Validators.required,
        Validators.pattern("^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$")])
    });
  }

  connectCamera() {
    if (!this.form.valid && this.form.get('enderecoIp')?.value == null) {
      this.toastService.showDanger('Insire o endereço de ip para conectar-se a câmera!');
    } else if (!this.form.valid) {
      this.toastService.showDanger('Endereço ip inválido!');
    } else {
      this.toastService.showSuccess('Câmera conectada com sucesso!');
      const goToUrlCamera = 'http://' + this.form.get('enderecoIp')?.value + '/pages/hmi/';
      this.cameraPath = this.sanitizer.bypassSecurityTrustResourceUrl(goToUrlCamera);
      this.showCameraStreaming = true;
    }
  }

  checkIpAddress(value: string) {
    if (value.length > 0 && !this.form.valid) {
      this.isFormInvalid = true;
    } else if((value.length == 11 || value.length <= 15) && this.form.valid) {
      this.isFormInvalid = false;
    } else {
      this.isFormInvalid = undefined;
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


    // debugger

    // let fileValue = [];

    // fileValue = this.fileContent;
    // for (let i = 0; i < fileValue.length; i++) {
    //   const element = fileValue[i];
    //   console.log('file', element);

    // }
  }
}
