import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-validation-intervenant-eleve',
  templateUrl: './validation-intervenant-eleve.component.html',
  styleUrls: ['./validation-intervenant-eleve.component.css']
})
export class ValidationIntervenantEleveComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  
  goToFinish() {
    this.route.navigate(['eleveCreeEquipe']);
  }

  goToRetour() {
    this.route.navigate(['eleveVueIntervenant']);
  }

}
