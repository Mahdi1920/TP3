import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coloriage',
  templateUrl: './coloriage.component.html',
  styleUrls: ['./coloriage.component.css']
})
export class ColoriageComponent implements OnInit {
couleur:string="";
police:string="Arial";
theme:string="";
res:string="";
t:string="Sombre";

Onaffiche()
{
  this.res="Résultat";
}

  constructor() { }

  ngOnInit() {
    

  }
}
