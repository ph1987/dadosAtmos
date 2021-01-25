import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  frmLogin: FormGroup;
  isLoading: boolean = false;

  constructor(private _snackBar: MatSnackBar, private utilSrv: UtilService) { }

  ngOnInit() {

    this.initForm();
    
  }

  initForm() {

    this.frmLogin = new FormGroup({
      login: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required])
    });

  }

  submitForm() {

    this.isLoading = true;

    setTimeout (() => {
      this.isLoading = false;
      this.utilSrv.openSnackBar('Login e/ou senha inválido(s)', 'OK');
    }, 3000);

  }

}
