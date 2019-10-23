import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  tab=[15,46,0,89,80];
  p:string="pair";
  ip:string="impair";

  constructor() { }
  
onPosition(indice:number)
  {
    console.log(indice);
  }
  ngOnInit() {
  }

}
