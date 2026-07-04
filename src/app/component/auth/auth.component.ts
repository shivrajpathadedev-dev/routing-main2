import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  allreadyhasaccount: boolean = false
  loginforms!: FormGroup
  signforms!: FormGroup
  constructor(
    private _authservice: AuthService,
    private _snackbar: SnackbarService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.createloginform()
    this.createsignform()
  }

  createloginform() {
    this.loginforms = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      userRole: new FormControl('admin'),
    })
  }

  createsignform() {
    this.signforms = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      userRole: new FormControl('admin', Validators.required)
    })
  }

  onLogin() {
    if (this.loginforms.invalid) {
      this.loginforms.markAllAsTouched()
    } else {
      let details = this.loginforms.value;
      this._authservice.login(details)
        .subscribe({
          next: data => {
            this._snackbar.openSuccesssnackbar(data.message);
            this._authservice.saveToken(data.token);
            this._authservice.saveUserrole(data.userRole);
            this._router.navigate(['home'])
          },
          error: err => {
            console.log(err);
            this._snackbar.openErrorsnackbar(err.error.message);
          }
        })
    }
  }

  onSignup() {
    if (this.signforms.invalid) {
      this.signforms.markAllAsTouched()
    }
    else {
      let userDetails = this.signforms.value;
      this._authservice.signup(userDetails)
        .subscribe({
          next: data => {
            this._snackbar.openErrorsnackbar(data.message);
            this.allreadyhasaccount = true

          },
          error: err => {
            this._snackbar.openErrorsnackbar(err.message);

          }
        })
    }
  }
}
