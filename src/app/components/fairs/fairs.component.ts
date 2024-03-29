import { Component, OnInit } from '@angular/core';
import { Ifairs } from 'src/app/model/Ifairs';
import { FairService } from 'src/app/service/fair.service';

@Component({
  selector: 'app-fairs',
  templateUrl: './fairs.component.html',
  styleUrls: ['./fairs.component.scss']
})
export class FairsComponent implements OnInit {
  fairArray !: Array<Ifairs> 
  constructor(
    private _fairs : FairService
  ) { }

  ngOnInit(): void {
    this.fairArray = this._fairs.fetchallfairs();
  }

}
