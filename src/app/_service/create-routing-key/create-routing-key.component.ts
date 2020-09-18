import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-create-routing-key',
  templateUrl: './create-routing-key.component.html',
  styleUrls: ['./create-routing-key.component.scss']
})
export class CreateRoutingKeyComponent implements OnInit {
  @Output() ClosingCreatingKeyModal = new EventEmitter<any>();
  @Input() serviceid: string; // decorate the property with @Input()
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
  ) { }
  form: FormGroup;
  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: [''],
    });
    if (localStorage.getItem('Authorization')==null){
      this.router.navigateByUrl(`login?next=service`);
    }
  }
  close() {
    this.ClosingCreatingKeyModal.emit();
  }
  get f() { return this.form.controls; }
  onSubmit(){
    const headers = { 'Authorization': localStorage.getItem('Authorization')|| ''}
    this.http.post<any>(`${environment.apiUrl}service/${this.serviceid}/routingkey?name=${this.f.name.value}`,null, { headers, observe: "response"})
    .subscribe((response: any) => {
      localStorage.setItem('Authorization',response.headers.get('Authorization'))
      //console.log(this.accountService.Authorization)
      window.location.reload();
      //this.router.navigateByUrl(`service/${this.serviceid}#integration-content`);
    },
    _error => {
      if (_error.status==401) {
        this.router.navigateByUrl(`login?next=service`);
      }
      console.log(_error)
    }
    );
  }
}
