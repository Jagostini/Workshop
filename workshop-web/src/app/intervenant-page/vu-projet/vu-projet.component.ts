import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-vu-projet',
  templateUrl: './vu-projet.component.html',
  styleUrls: ['./vu-projet.component.css']
})
export class VuProjetComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  goToIntervenantGestionProjet() {
    this.route.navigate(['IntervenantGestionProjet']);
  }

}
