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
import { ChoixEleveComponent } from './eleve-page/choix-eleve/choix-eleve.component';
import { ListProjetEleveComponent } from './eleve-page/list-projet-eleve/list-projet-eleve.component';
import { NewTeamEleveComponent } from './eleve-page/new-team-eleve/new-team-eleve.component';
import { ValidationIntervenantEleveComponent } from './eleve-page/validation-intervenant-eleve/validation-intervenant-eleve.component';
import { VuIntervenantEleveComponent } from './eleve-page/vu-intervenant-eleve/vu-intervenant-eleve.component';
import { VuProjetEleveComponent } from './eleve-page/vu-projet-eleve/vu-projet-eleve.component';
import { ChoixIntervenantComponent } from './intervenant-page/choix-intervenant/choix-intervenant.component';
import { GestionEquipeComponent } from './intervenant-page/gestion-equipe/gestion-equipe.component';
import { GestionProjetComponent } from './intervenant-page/gestion-projet/gestion-projet.component';
import { NewProjetComponent } from './intervenant-page/new-projet/new-projet.component';
import { NewEleveComponent } from './intervenant-page/new-eleve/new-eleve.component';
import { VuEquipeComponent } from './intervenant-page/vu-equipe/vu-equipe.component';
import { VuProjetComponent } from './intervenant-page/vu-projet/vu-projet.component';


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
    ChoixEleveComponent,
    ListProjetEleveComponent,
    NewTeamEleveComponent,
    ValidationIntervenantEleveComponent,
    VuIntervenantEleveComponent,
    VuProjetEleveComponent,
    ChoixIntervenantComponent,
    GestionEquipeComponent,
    GestionProjetComponent,
    NewProjetComponent,
    NewEleveComponent,
    VuEquipeComponent,
    VuProjetComponent
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
