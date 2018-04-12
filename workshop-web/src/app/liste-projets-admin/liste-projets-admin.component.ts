import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-projets-admin',
  templateUrl: './liste-projets-admin.component.html',
  styleUrls: ['./liste-projets-admin.component.css']
})
export class ListeProjetsAdminComponent implements OnInit {

  constructor() { }

  listProj= ['projet 1', 'projet 2', 'projet 3', 'projet 4'];

  ngOnInit() {
  }

}
