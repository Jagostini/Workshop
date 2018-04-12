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
import { ChoixEleveComponent } from './eleve-page/choix-eleve/choix-eleve.component';
import { ListProjetEleveComponent } from './eleve-page/list-projet-eleve/list-projet-eleve.component';
import { NewTeamEleveComponent } from './eleve-page/new-team-eleve/new-team-eleve.component';
import { ValidationIntervenantEleveComponent } from './eleve-page/validation-intervenant-eleve/validation-intervenant-eleve.component';
import { VuIntervenantEleveComponent } from './eleve-page/vu-intervenant-eleve/vu-intervenant-eleve.component';
import { VuProjetEleveComponent } from './eleve-page/vu-projet-eleve/vu-projet-eleve.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'adminProjet', component: VueProjetAdminComponent },
  { path: 'adminEleve', component: VueFicheEleveComponent },
  { path: 'adminIntervenant', component: VueFicheIntervenantComponent },
  { path: 'eleve', component: EleveComponent },
  { path: 'eleveListIntervenant', component: ListIntervenantEleveComponent },
  { path: 'eleveChoix', component: ChoixEleveComponent },
  { path: 'eleveListProjet', component: ListProjetEleveComponent },
  { path: 'eleveNewTeam', component: NewTeamEleveComponent },
  { path: 'eleveValidationIntervenant', component: ValidationIntervenantEleveComponent },
  { path: 'eleveVuIntervenant', component: VuIntervenantEleveComponent },
  { path: 'eleveVuProjet', component: VuProjetEleveComponent }
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
  ChoixEleveComponent,
  ListProjetEleveComponent,
  NewTeamEleveComponent,
  ValidationIntervenantEleveComponent,
  VuIntervenantEleveComponent,
  VuProjetEleveComponent
];
