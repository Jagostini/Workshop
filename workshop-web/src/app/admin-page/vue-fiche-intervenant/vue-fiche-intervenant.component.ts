import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-vue-fiche-intervenant',
  templateUrl: './vue-fiche-intervenant.component.html',
  styleUrls: ['./vue-fiche-intervenant.component.css']
})
export class VueFicheIntervenantComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToBack() {
    this.route.navigate(['ListeIntervenantsAdminComponent']);
  }

}
