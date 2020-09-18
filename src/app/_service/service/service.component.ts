import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  services=[];
  constructor(
    private router:Router,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('Authorization')==null){
      this.router.navigateByUrl(`login?next=service`);
    }
    const headers = { 'Authorization': localStorage.getItem('Authorization')}
    const resp=this.http.get<any>(`${environment.apiUrl}service`, { headers ,observe: "response"})
    resp.subscribe(
      (response: any) => {
        localStorage.setItem('Authorization',response.headers.get('Authorization'))
        this.services=response.body
        console.log(response)
      },
      _error => {
         if (_error.status==401) {
          this.router.navigateByUrl(`user/login?next=service`);
         }

      }
    );
  }

  showDropdown(event) {
    let thisDropdownBtn = $(event.currentTarget);
    let thisDropdown = thisDropdownBtn.parents(".vc-dropdown-container");
    thisDropdown.find(".vc-dropdown").toggle();
  }
  CreateService(){
    this.router.navigateByUrl('service/create');
  }
  getClassSatus(status){
    switch (status) {
      case "Awaiting":
        return "danger";
      case "OK":
        return "success";
      case "Acknowledged":
        return "warning";
    }
  }
  getClassNumber(count){
    switch (count) {
      case 0:
        return "";
      default:
        return "noteworthy";
    }
  }
}
