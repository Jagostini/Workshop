import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-projet-intervenant',
  templateUrl: './list-projet-intervenant.component.html',
  styleUrls: ['./list-projet-intervenant.component.css']
})
export class ListProjetIntervenantComponent implements OnInit {

  constructor() { }

  listProj= ['projet 1', 'projet 2', 'projet 3', 'projet 4'];
  
  ngOnInit() {
  }

}
