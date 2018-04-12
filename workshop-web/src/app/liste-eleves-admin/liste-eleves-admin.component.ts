import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive, Route } from '@angular/router';

@Component({
  selector: 'app-liste-eleves-admin',
  templateUrl: './liste-eleves-admin.component.html',
  styleUrls: ['./liste-eleves-admin.component.css']
})
export class ListeElevesAdminComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  gotoficheeleve() {
    this.route.navigate(['adminEleve']);
  }
  gotoback() {
    this.route.navigate(['admin']);
  }

}
