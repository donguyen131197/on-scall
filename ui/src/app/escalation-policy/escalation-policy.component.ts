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
    const _tr = $(event.currentTarget).parents("tr");
    const _table = _tr.parents(".vc-table");
    const _trIndex = _tr.index();
    const _detailTr = _table.find("tbody tr").filter(function(){
      return $(this).index() == _trIndex + 1;
    })
    _tr.toggleClass("showing");
    _detailTr.toggleClass("showing");
  }

}
