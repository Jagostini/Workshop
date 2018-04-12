import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-list-intervenant-projet',
  templateUrl: './list-intervenant-projet.component.html',
  styleUrls: ['./list-intervenant-projet.component.css']
})
export class ListIntervenantProjetComponent implements OnInit {

  constructor(private route: Router) { }

  listProjet = ['wshp 08/17', 'wshp 04/18']

  ngOnInit() {
  }

  goToProjet() {
    this.route.navigate(['eleveVueProjet']);
  }

}
