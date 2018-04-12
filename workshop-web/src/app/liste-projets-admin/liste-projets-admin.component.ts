import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-liste-projets-admin',
  templateUrl: './liste-projets-admin.component.html',
  styleUrls: ['./liste-projets-admin.component.css']
})
export class ListeProjetsAdminComponent implements OnInit {

  constructor(private route: Router) { }

  listProj = ['projet 1', 'projet 2', 'projet 3', 'projet 4'];

  ngOnInit() {
  }

  goToBack() {
    this.route.navigate(['admin']);
  }

  goToNewProjet() {
    this.route.navigate(['adminNouveauProjet']);
  }

  goToProjet() {
    this.route.navigate(['adminProjet']);
  }
}
