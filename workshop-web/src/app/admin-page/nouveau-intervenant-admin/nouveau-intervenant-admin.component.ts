import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nouveau-intervenant-admin',
  templateUrl: './nouveau-intervenant-admin.component.html',
  styleUrls: ['./nouveau-intervenant-admin.component.css']
})
export class NouveauIntervenantAdminComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToBack() {
    this.route.navigate(['ListeIntervenantsAdminComponent']);
  }
}
