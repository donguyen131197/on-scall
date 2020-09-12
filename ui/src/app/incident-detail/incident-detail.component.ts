import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incident-detail',
  templateUrl: './incident-detail.component.html',
  styleUrls: ['./incident-detail.component.scss']
})
export class IncidentDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showDropdown(event) {
    let thisDropdownBtn = $(event.currentTarget);
    let thisDropdown = thisDropdownBtn.parents(".vc-dropdown-container");
    thisDropdown.find(".vc-dropdown").toggle();
  }

  tabAction(event) {
    const _tab = $(event.currentTarget);
    const _tabGroup = _tab.parents(".tab-group");
    if (!_tab.hasClass("chosen")) {
      _tabGroup.children("li").removeClass("chosen");
      _tab.addClass("chosen");
      let _tabId = _tab.attr("id");
      $(".standard-content").hide();
      $("#" + _tabId.replace("-tab", "-content")).show();
    }
  }

}
