import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToHome() {
    this.route.navigate(['']);
  }

  goToProjet() {
    this.route.navigate(['ListeProjetsAdminComponent']);
  }

  goToEleve() {
    this.route.navigate(['ListeElevesAdminComponent']);
  }

  goToIntervenant() {
    this.route.navigate(['ListeIntervenantsAdminComponent']);
  }

}
