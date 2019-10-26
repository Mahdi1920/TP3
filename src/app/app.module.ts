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

@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    OrientationComponent,
    TableauComponent,
    SaisonComponent,
    StyleClassComponent,
    ColoriageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
