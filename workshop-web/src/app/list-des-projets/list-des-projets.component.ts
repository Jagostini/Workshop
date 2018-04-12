import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-list-des-projets',
  templateUrl: './list-des-projets.component.html',
  styleUrls: ['./list-des-projets.component.css']
})
export class ListDesProjetsComponent implements OnInit {

  constructor(private route: Router) { }


  listProj= ['projet 1', 'projet 2', 'projet 3', 'projet 4'];

  ngOnInit() {
  }

  goToProjet() {
    this.route.navigate(['eleveVueProjet']);
  }

}
