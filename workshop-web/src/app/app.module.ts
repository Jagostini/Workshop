import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';

// service
import { AdministrationService } from './service/administration/administration.service';
import { EtudiantService } from './service/etudiant/etudiant.service';
import { GroupeService } from './service/groupe/groupe.service';
import { IntervenantService } from './service/intervenant/intervenant.service';
import { ProjetService } from './service/projet/projet.service';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin-page/admin/admin.component';
import { VueProjetAdminComponent } from './admin-page/vue-projet-admin/vue-projet-admin.component';
import { VueFicheEleveComponent } from './admin-page/vue-fiche-eleve/vue-fiche-eleve.component';
import { VueFicheIntervenantComponent } from './admin-page/vue-fiche-intervenant/vue-fiche-intervenant.component';
import { EleveComponent } from './eleve-page/eleve/eleve.component';
import { ListIntervenantEleveComponent } from './eleve-page/list-intervenant-eleve/list-intervenant-eleve.component';
import { ListIntervenantProjetComponent } from './eleve-page/list-intervenant-projet/list-intervenant-projet.component';
import { VueProjetEleveComponent } from './eleve-page/vue-projet-eleve/vue-projet-eleve.component';
import { NouvelleEquipeEleveComponent } from './eleve-page/nouvelle-equipe-eleve/nouvelle-equipe-eleve.component';
import { VueIntervenantEleveComponent } from './eleve-page/vue-intervenant-eleve/vue-intervenant-eleve.component';
import { ValidationIntervenantEleveComponent } from './eleve-page/validation-intervenant-eleve/validation-intervenant-eleve.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HomeComponent,
    HeaderComponent,
    AdminComponent,
    VueProjetAdminComponent,
    VueFicheEleveComponent,
    VueFicheIntervenantComponent,
    EleveComponent,
    ListIntervenantEleveComponent,
    ListIntervenantProjetComponent,
    ListIntervenantProjetComponent,
    VueProjetEleveComponent,
    VueProjetEleveComponent,
    NouvelleEquipeEleveComponent,
    VueIntervenantEleveComponent,
    ValidationIntervenantEleveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AdministrationService,
    EtudiantService,
    GroupeService,
    IntervenantService,
    ProjetService,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
