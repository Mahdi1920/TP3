import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coloriage',
  templateUrl: './coloriage.component.html',
  styleUrls: ['./coloriage.component.css']
})
export class ColoriageComponent implements OnInit {
couleur:string="";
police:string="";
theme:string="";
res:string="";
t1:string="";
t2:string="";
t3:string="";
c:string;
Onaffiche()
{
  this.res="Résultat";
}

  constructor() { }

  ngOnInit() {
    //(function(){console.log('ss')})()

  }
}
