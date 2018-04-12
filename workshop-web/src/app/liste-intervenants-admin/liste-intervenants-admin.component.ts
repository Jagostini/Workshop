import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-liste-intervenants-admin',
  templateUrl: './liste-intervenants-admin.component.html',
  styleUrls: ['./liste-intervenants-admin.component.css']
})
export class ListeIntervenantsAdminComponent implements OnInit {

  constructor(private route: Router) { }
  list = ['Elon Musk', 'Elonpa Musk'];

  ngOnInit() {
  }

  goToProjet() {
    this.route.navigate(['adminIntervenant']);
  }

  gotoback() {
    this.route.navigate(['admin']);
  }
  gotoneweleve() {
    this.route.navigate(['adminNouveauEleve']);
  }
}
