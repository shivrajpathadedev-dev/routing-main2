import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-path-not-found',
  templateUrl: './path-not-found.component.html',
  styleUrls: ['./path-not-found.component.scss']
})
export class PathNotFoundComponent implements OnInit {
getmsg!:string
  constructor(
    private _routes:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getmsg=this._routes.snapshot.data['msg']
  }

}
