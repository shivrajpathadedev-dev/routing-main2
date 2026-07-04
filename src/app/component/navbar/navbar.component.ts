import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _authservice: AuthService,
    private _snackbar: SnackbarService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

 onlogOut(){
    this._authservice.logout()
    .subscribe({
      next:data=>{
        this._snackbar.openSuccesssnackbar(data.msg)
        this._router.navigate([''])
      },

      error:err=>{
        this._snackbar.openErrorsnackbar(err.msg)
      }
    })
  }

}
