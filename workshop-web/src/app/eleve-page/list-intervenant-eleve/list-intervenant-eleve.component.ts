import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-list-intervenant-eleve',
  templateUrl: './list-intervenant-eleve.component.html',
  styleUrls: ['./list-intervenant-eleve.component.css']
})
export class ListIntervenantEleveComponent implements OnInit {

  constructor(private route: Router) { }

  listProjet = ['Elon Musk', 'Benjamin Tourman']
  ngOnInit() {
  }

  goToVueIntervenant() {
    this.route.navigate(['eleveVueIntervenant']);
  }

}
