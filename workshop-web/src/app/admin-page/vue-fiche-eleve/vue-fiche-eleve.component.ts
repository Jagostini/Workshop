import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive, Route } from '@angular/router';

@Component({
  selector: 'app-vue-fiche-eleve',
  templateUrl: './vue-fiche-eleve.component.html',
  styleUrls: ['./vue-fiche-eleve.component.css']
})
export class VueFicheEleveComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  gotoback() {
    this.route.navigate(['ListeElevesAdminComponent']);
  }

}
