import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.scss']
})
export class CreateServiceComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
  ) { }
  escalations=[];
  form: FormGroup;
  submitted=false;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['',Validators.required],
      description: [''],
      escalation: [''],
      routing_name: [''],
    });
    if (localStorage.getItem('Authorization')==null){
      this.router.navigateByUrl(`login?next=service`);
    }
    if (localStorage.getItem('Authorization')==null){
      this.router.navigateByUrl(`login?next=incident`);
    }
    const headers = { 'Authorization': localStorage.getItem('Authorization')}
    const resp=this.http.get<any>(`${environment.apiUrl}escalationname`, { headers ,observe: "response"})
    resp.subscribe(
      (response: any) => {
        localStorage.setItem('Authorization',response.headers.get('Authorization'))
        this.escalations=response.body
        console.log(response)
      },
      _error => {
         if (_error.status==401) {
          this.router.navigateByUrl(`login?next=incident`);
         }

      }
    );
  }
  get f() { return this.form.controls; }
  showDropdown(event) {
    let thisDropdownBtn = $(event.currentTarget);
    let thisDropdown = thisDropdownBtn.parents(".vc-dropdown-container");
    thisDropdown.find(".vc-dropdown").toggle();
  }
  onSubmit(){
    this.submitted=true
    const body = {
      'routing_name':this.f.routing_name.value,
      'escalation_id': this.f.escalation.value,
      'description':this.f.description.value,
      'name':this.f.name.value,
    }
    const headers = { 'Authorization': localStorage.getItem('Authorization')|| ''}
    this.http.post<any>(`${environment.apiUrl}service`, body, { headers, observe: "response"})
    .subscribe((response: any) => {
      localStorage.setItem('Authorization',response.headers.get('Authorization'))
      //console.log(this.accountService.Authorization)

      this.router.navigateByUrl(`service/${response.body.id}`);
    },
    _error => {
      if (_error.status==401) {
        this.router.navigateByUrl(`login?next=incident`);
      }
      console.log(_error)
    }
    );
  }
}
