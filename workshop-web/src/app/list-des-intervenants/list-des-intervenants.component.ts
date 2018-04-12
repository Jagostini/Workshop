import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-list-des-intervenants',
  templateUrl: './list-des-intervenants.component.html',
  styleUrls: ['./list-des-intervenants.component.css']
})
export class ListDesIntervenantsComponent implements OnInit {

  constructor(private route:Router) { }

  list = ['Elon Musk','Elonpa Musk'];
  
  ngOnInit() {
  }

  goToIntervenant() {
    this.route.navigate(['eleveVueIntervenant']);
  }

  goToRetour() {
    this.route.navigate(['eleveCreeEquipe']);
  }
  

}
