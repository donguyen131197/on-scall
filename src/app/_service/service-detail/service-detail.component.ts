import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {

  isShowingIncidentContent = true;
  isShowingIntegrationContent = false;
  isShowingCreatingKeyModal = false;
  isShowingAddingChannelModal = false;

  constructor() { }

  ngOnInit(): void {
  }

  showDropdown(event) {
    let thisDropdownBtn = $(event.currentTarget);
    let thisDropdown = thisDropdownBtn.parents(".vc-dropdown-container");
    thisDropdown.find(".vc-dropdown").toggle();
  }

  showIncident() {
    this.isShowingIncidentContent = true;
    this.isShowingIntegrationContent = false;
  }

  showIntegration() {
    this.isShowingIncidentContent = false;
    this.isShowingIntegrationContent = true;
  }

  copyKey(event) {
    const _btn = $(event.currentTarget);
    const _text = _btn.parents(".copiable-text");
    const _key = _text.find(".key").html();
    const _input = _text.find("input");
    _input.val(_key);
    _input.select();
    document.execCommand('copy');
  }
  ClosingCreatingKeyModal(){
    this.isShowingCreatingKeyModal =false;
  }
  ClosingAddingChannelModal(){
    this.isShowingAddingChannelModal=false;
  }
}
