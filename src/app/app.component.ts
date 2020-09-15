import { Component } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'VNG Cloud - On-call Escalation';

  constructor(
    private router: Router) { }

  ngOnInit() {
  }

}
