import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-vu-equipe',
  templateUrl: './vu-equipe.component.html',
  styleUrls: ['./vu-equipe.component.css']
})
export class VuEquipeComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  goToIntervenantGestionEquipe() {
    this.route.navigate(['IntervenantGestionEquipe']);
  }

}
