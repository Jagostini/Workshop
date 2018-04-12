import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-vue-projet-admin',
  templateUrl: './vue-projet-admin.component.html',
  styleUrls: ['./vue-projet-admin.component.css']
})
export class VueProjetAdminComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToBack() {
    this.route.navigate(['ListeProjetsAdminComponent']);
  }

}
