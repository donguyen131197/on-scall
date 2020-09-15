import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor(
    private router:Router,
  ) { }

  ngOnInit(): void {
  }

  showDropdown(event) {
    let thisDropdownBtn = $(event.currentTarget);
    let thisDropdown = thisDropdownBtn.parents(".vc-dropdown-container");
    thisDropdown.find(".vc-dropdown").toggle();
  }
  CreateService(){
    this.router.navigateByUrl('service/create');
  }
}
