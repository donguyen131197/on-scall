import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escalation-policy',
  templateUrl: './escalation-policy.component.html',
  styleUrls: ['./escalation-policy.component.scss']
})
export class EscalationPolicyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showDropdown(event) {
    let thisDropdownBtn = $(event.currentTarget);
    let thisDropdown = thisDropdownBtn.parents(".vc-dropdown-container");
    thisDropdown.find(".vc-dropdown").toggle();
  }

  showDetail(event) {
    let _tr = $(event.currentTarget);
    let _trId = _tr.attr("id");
    let _table = _tr.parents(".vc-table");
    let _policiesContainer = _table.parents(".policies-container");
    if (_tr.hasClass("showing")) {

    }
    else {
      _table.clone().addClass("duplicated").appendTo(_policiesContainer);
      _table.hide();
    }
  }

}
