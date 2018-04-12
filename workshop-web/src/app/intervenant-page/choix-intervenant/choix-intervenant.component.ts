import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-choix-intervenant',
  templateUrl: './choix-intervenant.component.html',
  styleUrls: ['./choix-intervenant.component.css']
})
export class ChoixIntervenantComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToHome() {
    this.route.navigate(['']);
  }
  goToNotification() {
    this.route.navigate(['IntervenantNotification']);
  }
  goToEquipe() {
    this.route.navigate(['IntervenantGestionEquipe']);
  }
  goToProjet() {
    this.route.navigate(['IntervenantGestionProjet']);
  }

}
