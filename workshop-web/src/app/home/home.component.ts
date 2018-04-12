import { Component, OnInit } from '@angular/core';
import { IntervenantService, intervenant } from './../service/intervenant/intervenant.service';
import { AdministrationService, Administration } from './../service/administration/administration.service';
import { EtudiantService, Etudiant } from './../service/etudiant/etudiant.service';
import { groupe } from '../service/groupe/groupe.service';
import { Router, RouterLinkActive } from '@angular/router';
import { AppRoutingModule, routingComponents } from './../app-routing.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router) {}


  // tslint:disable-next-line:max-line-length
  etudiant1: Etudiant = { id: 5, idGroupe: 5, prenom: 'toto', nom: 'toto' , classe: 'EPSI B3', email: 'toto@gmail.com', motDePasse: 'toto' };
  // tslint:disable-next-line:max-line-length
  etudiant2: Etudiant = { id: 5, idGroupe: 6, prenom: 'tata', nom: 'tata' , classe: 'EPSI B3', email: 'tata@gmail.com', motDePasse: 'tata' };

  administration1: Administration = { id: 5, nom: 'admin', prenom: 'admin', motDePasse: 'admin' };
  administration2: Administration = { id: 6, nom: 'admin2', prenom: 'admin2', motDePasse: 'admin2' };

  // tslint:disable-next-line:max-line-length
  intervenant1: intervenant = { id: 10, idProjet: 1, nom: 'Musk', prenom: 'Elon', competence: 'java, javacript', disponibilite: 'plein de chose', tempsRealise: 10, motDePasse: 'Elon'};
  // tslint:disable-next-line:max-line-length
  intervenant2: intervenant = { id: 11, idProjet: 2, nom: 'Tourman', prenom: 'Benjamin', competence: 'JVM', disponibilite: 'plein de truc', tempsRealise: 2, motDePasse: 'benjamin'};

  login: string;
  motDePasse: string;

  role = 1;
  etat = true;
  routAdmin = false;

  ngOnInit() {
  }

  changeRole(r: number) {
    this.role = r;
  }

  gotoNextPage(name: string, pwd: string) {

    console.log(name);
    console.log(pwd);
    this.login = name;
    this.motDePasse = pwd;

    console.log(this.administration1.motDePasse.localeCompare(this.motDePasse));
    console.log(this.administration1.nom.localeCompare(this.login));
    this.administration1.motDePasse.localeCompare(this.motDePasse);
    this.administration1.nom.localeCompare(this.login);

    if (this.role === 1) {
      // tslint:disable-next-line:max-line-length
      if (this.administration1.motDePasse.localeCompare(this.motDePasse) === 0 && this.administration1.nom.localeCompare(this.login) === 0) {
        console.log('bravo');
        this.etat = true;
        this.routAdmin = true;
        this.route.navigate(['admin']);
      } else {
        this.etat = false;
        console.log('connexion refusé');
      }

    }
    if (this.role === 3) {
      if (this.etudiant1.motDePasse.localeCompare(this.motDePasse) === 0 && this.etudiant1.nom.localeCompare(this.login) === 0) {
        console.log('gotoEtudiant');
        this.etat = true;
        this.route.navigate(['eleve']);
      } else {
        this.etat = false;
        console.log('connexion refusé');
      }

    }
    if (this.role === 2) {
      // tslint:disable-next-line:max-line-length
      if (this.intervenant1.motDePasse.localeCompare(this.motDePasse) === 0 && this.intervenant1.nom. localeCompare(this.motDePasse) === 0) {
        console.log('gotoIntervenant');
        this.etat = true;
      } else {
        this.etat = false;
        console.log('connexion refusé');
      }

    }
  }

}
