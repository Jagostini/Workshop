import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-gestion-equipe',
  templateUrl: './gestion-equipe.component.html',
  styleUrls: ['./gestion-equipe.component.css']
})
export class GestionEquipeComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  goToIntervenant() {
    this.route.navigate(['Intervenant']);
  }
  goToIntervenantVuEquipe() {
    this.route.navigate(['IntervenantVuEquipe']);
  }


}
