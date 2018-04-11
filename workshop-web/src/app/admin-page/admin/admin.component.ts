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

  goToProjet() {
    this.route.navigate(['adminProjet']);
  }

  goToEleve() {
    this.route.navigate(['adminEleve']);
  }

  goToIntervenant() {
    this.route.navigate(['adminIntervenant']);
  }

}
