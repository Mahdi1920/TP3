import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orientation',
  templateUrl: './orientation.component.html',
  styleUrls: ['./orientation.component.css']
})
export class OrientationComponent implements OnInit {
  etudiant={nom:'Ali', moyenne:9.85};
  nom:string=this.etudiant.nom;
  moy:number=this.etudiant.moyenne;
  decision:string="Décision: Redouble";
  specialite:string="Choisir une spécialité :";
  specialites=["DSI","RSI","SEM"];
  spec:string="";
  constructor() { }

  ngOnInit() {
  }

}
