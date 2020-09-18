import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  passToggle(event) {
    let _subfix = $(event.currentTarget);
    const _inputWS = _subfix.parents(".input-with-subfix");
    const _input = _inputWS.find("input");
    if (_subfix.children().hasClass("icon-overview")) {
      _input.attr("type", "text");
      let _iconHtml = _subfix.html();
      _subfix.html(_iconHtml.replace(/\icon-overview/g, "icon-hidepass"));
    }
    else {
      _input.attr("type", "password");
      let _iconHtml = _subfix.html();
      _subfix.html(_iconHtml.replace(/\icon-hidepass/g, "icon-overview"));
    }
  }
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted=true
    const body = {
      'email': this.f.email.value,
      'password':this.f.password.value,
    }
    const headers = { 'Authorization': localStorage.getItem('Authorization')|| ''}
    this.http.post<any>(`${environment.apiUrl}user/login`, body, { headers, observe: "response"}).subscribe((response: any) => {
      localStorage.setItem('Authorization',response.headers.get('Authorization'))
      //console.log(this.accountService.Authorization)
      const returnUrl = this.route.snapshot.queryParams['next'] || '/incident';
      this.router.navigateByUrl(returnUrl);
    },
    _error => {
      window.alert('Wrong username or password!');
    }
    );
  }
}
