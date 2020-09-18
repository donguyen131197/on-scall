import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
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
  service;
  serviceID;
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      //console.log(params)
      this.serviceID = params.get('serviceID');
      if (localStorage.getItem('Authorization')==null){
        this.router.navigateByUrl(`login?next=service/${this.serviceID}`);
      }
      const headers = { 'Authorization': localStorage.getItem('Authorization')}
      const resp=this.http.get<any>(`${environment.apiUrl}service/${this.serviceID}`, { headers ,observe: "response"})
      resp.subscribe(
        (response: any) => {
          localStorage.setItem('Authorization',response.headers.get('Authorization'))
          this.service=response.body
          console.log(response)
        },
        _error => {
           if (_error.status==401) {
            this.router.navigateByUrl(`user/login?next=incident`);
           }

        }
      );
    })
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
  getClassSatus(status){
    switch (status) {
      case "Awaiting":
        return "danger";
      case "Resolved":
        return "success";
      case "Triggered":
        return "danger";
      case "OK":
        return "success";
      case "Acknowledged":
        return "warning";
    }
  }
  checkStatusACK(status){
    switch (status) {
      case "Triggered":
        return true;
      case "Resolved":
        return false;
      case "Acknowledged":
        return false;
    }
  }
  checkStatusResovle(status){
    switch (status) {
      case "Triggered":
        return true;
      case "Resolved":
        return false;
      case "Acknowledged":
        return true;
    }
  }
}
