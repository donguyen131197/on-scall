import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-escalation-policy',
  templateUrl: './escalation-policy.component.html',
  styleUrls: ['./escalation-policy.component.scss']
})
export class EscalationPolicyComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }
  escalationes=[];
  ngOnInit(  ): void {
    //console.log("abc")
    if (localStorage.getItem('Authorization')==null){
      this.router.navigateByUrl(`login?next=escalation`);
    }
    const headers = { 'Authorization': localStorage.getItem('Authorization')}
    const resp=this.http.get<any>(`${environment.apiUrl}escalation`, { headers ,observe: "response"})
    //console.log(resp)
    resp.subscribe(
      (response: any) => {
        localStorage.setItem('Authorization',response.headers.get('Authorization'))
        this.escalationes=response.body
        console.log(this.escalationes)
      },
      _error => {
         if (_error.status==401) {
          this.router.navigateByUrl(`user/login?next=escalation`);
         }
      }
    );
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
  CreatePolicy(){
    this.router.navigateByUrl('escalation/create');
  }
}
