import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nouvelle-equipe-eleve',
  templateUrl: './nouvelle-equipe-eleve.component.html',
  styleUrls: ['./nouvelle-equipe-eleve.component.css']
})
export class NouvelleEquipeEleveComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {

  }

  goToEleveEquipe() {
    this.route.navigate(['eleveCreeEquipe']);
  }

  goToRetour() {
    this.route.navigate(['eleveVueProjet']);
  }

  

}
