import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-cree-equipe-eleve',
  templateUrl: './cree-equipe-eleve.component.html',
  styleUrls: ['./cree-equipe-eleve.component.css']
})
export class CreeEquipeEleveComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  goToListIntervenant() {
    this.route.navigate(['listIntervenant']);
  }

  goToRetour() {
    this.route.navigate(['eleveNouvelleEquipe']);
  }
  

}
