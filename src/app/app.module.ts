import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfilComponent } from './profil/profil.component';
import { OrientationComponent } from './orientation/orientation.component';
import { TableauComponent } from './tableau/tableau.component';
import { SaisonComponent } from './saison/saison.component';
import { StyleClassComponent } from './style-class/style-class.component';
import { ColoriageComponent } from './coloriage/coloriage.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { EmployeComponent } from './employe/employe.component';
import { NomPersoPipe } from './nom-perso.pipe';
import { MentionPipe } from './mention.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    OrientationComponent,
    TableauComponent,
    SaisonComponent,
    StyleClassComponent,
    ColoriageComponent,
    EtudiantsComponent,
    EmployeComponent,
    NomPersoPipe,
    MentionPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
