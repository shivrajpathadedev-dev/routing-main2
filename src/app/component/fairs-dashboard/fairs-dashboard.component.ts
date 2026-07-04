import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFairs } from 'src/app/models/fairs';
import { FairsService } from 'src/app/services/fairs.service';

@Component({
  selector: 'app-fairs-dashboard',
  templateUrl: './fairs-dashboard.component.html',
  styleUrls: ['./fairs-dashboard.component.scss']
})
export class FairsDashboardComponent implements OnInit {
fairsArr:Array<IFairs>=[]
  constructor(
    private _fairservice:FairsService,
    private _router:Router,
    private _routes:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._fairservice.fetchFairsArr()
    .subscribe({
      next:data=>{
        this.fairsArr=data
        this._router.navigate(['/fairs',data[0].fairId])
      },
      error:err=>{
        console.log(err)
      }
    })
  }

  

}
