import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// service
import { AdministrationService } from './service/administration/administration.service';
import { EtudiantService } from './service/etudiant/etudiant.service';
import { GroupeService } from './service/groupe/groupe.service';
import { IntervenantService } from './service/intervenant/intervenant.service';
import { ProjetService } from './service/projet/projet.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AdministrationService,
    EtudiantService,
    GroupeService,
    IntervenantService,
    ProjetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
