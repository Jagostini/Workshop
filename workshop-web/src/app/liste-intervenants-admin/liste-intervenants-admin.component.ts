import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-intervenants-admin',
  templateUrl: './liste-intervenants-admin.component.html',
  styleUrls: ['./liste-intervenants-admin.component.css']
})
export class ListeIntervenantsAdminComponent implements OnInit {

  constructor() { }
  list = ['Elon Musk','Elonpa Musk'];

  ngOnInit() {
  }

}
