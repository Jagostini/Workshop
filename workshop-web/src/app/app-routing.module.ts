import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// router
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'adminProjet', component: VueProjetAdminComponent },
  { path: 'adminEleve', component: VueFicheEleveComponent },
  { path: 'adminIntervenant', component: VueFicheIntervenantComponent },
  { path: 'eleve', component: EleveComponent },
  { path: 'eleveListIntervenant', component: ListIntervenantEleveComponent },
  { path: 'eleveListProjet', component: ListIntervenantProjetComponent },
  { path: 'eleveVueProjet', component: VueProjetEleveComponent },
  { path: 'eleveNouvelleEquipe', component: NouvelleEquipeEleveComponent },
  { path: 'eleveVueIntervenant', component: VueIntervenantEleveComponent },
  { path: 'eleveValidationIntervenant', component: VueIntervenantEleveComponent },
  { path: 'adminNouveauProjet', component: NouveauProjetAdminComponent },
  { path: 'adminNouveauEleve', component: NouveauEleveAdminComponent },
  { path: 'adminNouveauIntervenant', component: NouveauIntervenantAdminComponent },
  { path: 'listEleves', component: ListDesElevesComponent },
  { path: 'listIntervenant', component: ListDesIntervenantsComponent },
  { path: 'listProjet', component: ListDesProjetsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  AdminComponent,
  VueProjetAdminComponent,
  VueFicheEleveComponent,
  VueFicheIntervenantComponent,
  EleveComponent,
  ListIntervenantEleveComponent,
  ListIntervenantProjetComponent,
  VueIntervenantEleveComponent
];
