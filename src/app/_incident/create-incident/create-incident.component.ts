import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-create-incident',
  templateUrl: './create-incident.component.html',
  styleUrls: ['./create-incident.component.scss']
})
export class CreateIncidentComponent implements OnInit {
  @Output() newCloseEvent = new EventEmitter<any>();
  form: FormGroup;
  submitted= false;
  services=[];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
  ) { }
  get f() { return this.form.controls; }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      urgency: ['', Validators.required],
      service: ['', Validators.required],
      description: [''],
      name: ['', Validators.required],
  });
  if (localStorage.getItem('Authorization')==null){
    this.router.navigateByUrl(`login?next=incident`);
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
        this.router.navigateByUrl(`login?next=incident`);
       }

    }
  );
  }
  onSubmit(){
    this.submitted=true
    const body = {
      'urgency':this.f.urgency.value,
      'service_id': this.f.service.value,
      'description':this.f.description.value,
      'title':this.f.name.value,
    }
    const headers = { 'Authorization': localStorage.getItem('Authorization')|| ''}
    this.http.post<any>(`${environment.apiUrl}incident`, body, { headers, observe: "response"})
    .subscribe((response: any) => {
      localStorage.setItem('Authorization',response.headers.get('Authorization'))
      //console.log(this.accountService.Authorization)

      this.router.navigateByUrl(`incident/${response.body.incidentid}`);
    },
    _error => {
      if (_error.status==401) {
        this.router.navigateByUrl(`login?next=incident`);
      }
      console.log(_error)
    }
    );
    console.log(this.f.urgency.value)
    console.log(this.f.service.value)
    console.log(this.f.description.value)
    console.log(this.f.name.value)
  }
  close() {
    this.newCloseEvent.emit();
  }
}
