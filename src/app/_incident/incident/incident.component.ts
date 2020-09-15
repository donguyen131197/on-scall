import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.scss']
})
export class IncidentComponent implements OnInit {

  isShowingCreateModal = false;
  incidents=[];
  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }
  getClassSatus(status){
    switch (status) {
      case "Trigger":
        return "danger";
      case "Resolved":
        return "success";
      case "Acknowledged":
        return "warning";
    }
  }
  ngOnInit(): void {
    if (localStorage.getItem('Authorization')==null){
      this.router.navigateByUrl(`login?next=incident`);
    }
    const headers = { 'Authorization': localStorage.getItem('Authorization')}
    const resp=this.http.get<any>(`${environment.apiUrl}incident`, { headers ,observe: "response"})
    resp.subscribe(
      (response: any) => {
        localStorage.setItem('Authorization',response.headers.get('Authorization'))
        this.incidents=response.body
        //console.log(response)
      },
      _error => {
         if (_error.status==401) {
          this.router.navigateByUrl(`login?next=incident`);
         }

      }
    );
  }

  showDropdown(event) {
    let thisDropdownBtn = $(event.currentTarget);
    let thisDropdown = thisDropdownBtn.parents(".vc-dropdown-container");
    thisDropdown.find(".vc-dropdown").toggle();
  }
  close(){
    this.isShowingCreateModal = false;
  }

}
