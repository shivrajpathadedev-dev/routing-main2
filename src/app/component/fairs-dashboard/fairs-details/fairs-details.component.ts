import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFairs } from 'src/app/models/fairs';
import { FairsService } from 'src/app/services/fairs.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-fairs-details',
  templateUrl: './fairs-details.component.html',
  styleUrls: ['./fairs-details.component.scss']
})
export class FairsDetailsComponent implements OnInit {
fairsObj!:IFairs
fairsId!:string
  constructor(
    private _fairsService:FairsService,
    private _snackbar:SnackbarService,
    private _routes:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._routes.params.subscribe(param=>{
      this.fairsId=param['id']
      if(this.fairsId){
        this._fairsService.fetchFairsId(this.fairsId)
        .subscribe({
          next:data=>{
            this.fairsObj=data
            this._snackbar.openSuccesssnackbar(data.fairName)
          },
          error:err=>{
            this._snackbar.openErrorsnackbar(err.msg)
          }
        })
      }
    })
  }

}
