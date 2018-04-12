import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-vue-projet-eleve',
  templateUrl: './vue-projet-eleve.component.html',
  styleUrls: ['./vue-projet-eleve.component.css']
})
export class VueProjetEleveComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  goToNouvelleEquipe() {
    this.route.navigate(['eleveNouvelleEquipe']);
  }

  goToRetour() {
    this.route.navigate(['listProjet']);
  }

}
