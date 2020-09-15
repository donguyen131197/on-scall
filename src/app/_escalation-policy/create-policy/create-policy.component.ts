import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-policy',
  templateUrl: './create-policy.component.html',
  styleUrls: ['./create-policy.component.scss']
})
export class CreatePolicyComponent implements OnInit {

  isRepetitionEnabled = false;

  constructor() { }

  ngOnInit(): void {
  }

  showDropdown(event) {
    let thisDropdownBtn = $(event.currentTarget);
    let thisDropdown = thisDropdownBtn.parents(".vc-dropdown-container");
    thisDropdown.find(".vc-dropdown").toggle();
  }

}
