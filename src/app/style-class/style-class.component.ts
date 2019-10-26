import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-class',
  templateUrl: './style-class.component.html',
  styleUrls: ['./style-class.component.css']
})
export class StyleClassComponent implements OnInit {
couleur:string="red";
taille:number=32;
style:string="italic";
admin:boolean=true;
classe:string="c1";

getColor() 
{
  return "green";
}
  constructor() { }

  ngOnInit() {
  }

}
