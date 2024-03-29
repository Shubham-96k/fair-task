import { Component, Input, OnInit } from '@angular/core';
import { Ifairs } from 'src/app/model/Ifairs';
import { FairService } from 'src/app/service/fair.service';

@Component({
  selector: 'app-faircards',
  templateUrl: './faircards.component.html',
  styleUrls: ['./faircards.component.scss']
})
export class FaircardsComponent implements OnInit {
  @Input() myfair !: Ifairs;

  constructor(
    
  ) { }

  ngOnInit(): void {
  
  }

}
