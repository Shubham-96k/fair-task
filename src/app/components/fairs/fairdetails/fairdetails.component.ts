import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ifairs } from 'src/app/model/Ifairs';
import { FairService } from 'src/app/service/fair.service';

@Component({
  selector: 'app-fairdetails',
  templateUrl: './fairdetails.component.html',
  styleUrls: ['./fairdetails.component.scss']
})
export class FairdetailsComponent implements OnInit {
  fairobj !: Ifairs;
  constructor(
    private _route : ActivatedRoute,
    private _fair : FairService
  ) { }

  ngOnInit(): void {
    this._route.params
    .subscribe(res => {
      
     this.fairobj = this._fair.fetchfair(res['fairId'])
    })
  }

}
