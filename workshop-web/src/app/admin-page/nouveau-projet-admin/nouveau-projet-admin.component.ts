import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nouveau-projet-admin',
  templateUrl: './nouveau-projet-admin.component.html',
  styleUrls: ['./nouveau-projet-admin.component.css']
})
export class NouveauProjetAdminComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToBack() {
    this.route.navigate(['ListeProjetsAdminComponent']);
  }

}
