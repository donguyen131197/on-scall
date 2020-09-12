import { Component, OnInit, Output } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

}
