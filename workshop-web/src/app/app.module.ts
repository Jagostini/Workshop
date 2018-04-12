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
import { NouveauProjetAdminComponent } from './admin-page/nouveau-projet-admin/nouveau-projet-admin.component';
import { NouveauEleveAdminComponent } from './admin-page/nouveau-eleve-admin/nouveau-eleve-admin.component';
import { NouveauIntervenantAdminComponent } from './admin-page/nouveau-intervenant-admin/nouveau-intervenant-admin.component';
import { ListDesElevesComponent } from './list-des-eleves/list-des-eleves.component';
import { ListDesIntervenantsComponent } from './list-des-intervenants/list-des-intervenants.component';
import { ListDesProjetsComponent } from './list-des-projets/list-des-projets.component';
import { CreeEquipeEleveComponent } from './eleve-page/cree-equipe-eleve/cree-equipe-eleve.component';
import { ListEquipeIntervenantComponent } from './list-equipe-intervenant/list-equipe-intervenant.component';
import { ListProjetIntervenantComponent } from './list-projet-intervenant/list-projet-intervenant.component';
import { ListeElevesAdminComponent } from './liste-eleves-admin/liste-eleves-admin.component';
import { ListeIntervenantsAdminComponent } from './liste-intervenants-admin/liste-intervenants-admin.component';
import { ListeProjetsAdminComponent } from './liste-projets-admin/liste-projets-admin.component';


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
    NouveauProjetAdminComponent,
    NouveauEleveAdminComponent,
    NouveauIntervenantAdminComponent,
    ListDesElevesComponent,
    ListDesIntervenantsComponent,
    ListDesProjetsComponent,
    CreeEquipeEleveComponent,
    ListEquipeIntervenantComponent,
    ListProjetIntervenantComponent,
    ListeElevesAdminComponent,
    ListeIntervenantsAdminComponent,
    ListeProjetsAdminComponent,
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
