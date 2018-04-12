import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nouveau-eleve-admin',
  templateUrl: './nouveau-eleve-admin.component.html',
  styleUrls: ['./nouveau-eleve-admin.component.css']
})
export class NouveauEleveAdminComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToBack() {
    this.route.navigate(['ListeElevesAdminComponent']);
  }
}
