import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-eleve',
  templateUrl: './eleve.component.html',
  styleUrls: ['./eleve.component.css']
})
export class EleveComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToListIntervenant() {
    this.route.navigate(['eleveListIntervenant']);
  }

}
