import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  goToIntervenant() {
    this.route.navigate(['Intervenant']);
  }

}
