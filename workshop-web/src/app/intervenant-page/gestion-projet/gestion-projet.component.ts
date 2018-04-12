import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-gestion-projet',
  templateUrl: './gestion-projet.component.html',
  styleUrls: ['./gestion-projet.component.css']
})
export class GestionProjetComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  goToIntervenant() {
    this.route.navigate(['Intervenant']);
  }
  goToIntervenantVuProjet() {
    this.route.navigate(['IntervenantVuProjet']);
  }
}
