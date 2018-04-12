import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-vue-intervenant-eleve',
  templateUrl: './vue-intervenant-eleve.component.html',
  styleUrls: ['./vue-intervenant-eleve.component.css']
})
export class VueIntervenantEleveComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  goToAppelerIntervenant() {
    this.route.navigate(['eleveValidationIntervenant']);
  }

  goToRetour() {
    this.route.navigate(['listIntervenant']);
  }

}
