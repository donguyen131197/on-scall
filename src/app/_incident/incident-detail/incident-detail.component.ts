import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-incident-detail',
  templateUrl: './incident-detail.component.html',
  styleUrls: ['./incident-detail.component.scss']
})
export class IncidentDetailComponent implements OnInit {
  incident;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      //console.log(params)
      const incidentID= params.get('incidentID');
      if (localStorage.getItem('Authorization')==null){
        this.router.navigateByUrl(`login?next=incident/${incidentID}`);
      }
      const headers = { 'Authorization': localStorage.getItem('Authorization')}
      const resp=this.http.get<any>(`${environment.apiUrl}incident/${incidentID}`, { headers ,observe: "response"})
      resp.subscribe(
        (response: any) => {
          localStorage.setItem('Authorization',response.headers.get('Authorization'))
          this.incident=response.body
          //console.log(response)
        },
        _error => {
           if (_error.status==401) {
            this.router.navigateByUrl(`user/login?next=incident`);
           }

        }
      );
    });
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
  getClassSatus(status){
    switch (status) {
      case "Triggered":
        return "danger";
      case "Resolved":
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
  checkStatusReAssign(status){
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
