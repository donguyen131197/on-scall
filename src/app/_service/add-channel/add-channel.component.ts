import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-add-channel',
  templateUrl: './add-channel.component.html',
  styleUrls: ['./add-channel.component.scss']
})
export class AddChannelComponent implements OnInit {

  isShowingAdvanced = false;
  isShowingSlackAuthen = true;
  isShowingSkypeIntegration = false;
  @Input() serviceid: string; // decorate the property with @Input()
  @Output() ClosingAddingChannelModal = new EventEmitter<any>();
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
  ) { }
  form: FormGroup;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [''],
      type: [''],
    });
    if (localStorage.getItem('Authorization')==null){
      this.router.navigateByUrl(`login?next=service`);
    }
  }

  copyLink(event) {
    const _btn = $(event.currentTarget);
    const _text = _btn.parents(".copiable-text");
    const _link = _text.find(".link").html();
    const _input = _text.find("input");
    _input.val(_link);
    _input.select();
    document.execCommand('copy');
  }

  changeChannelType(event) {
    const _select = $(event.currentTarget);
    const _chosen = _select.find("option:selected");
    const _chosenValue = _chosen.val();
    if (_chosenValue == "slack") {
      this.isShowingSlackAuthen = true;
      this.isShowingSkypeIntegration = false;
    }
    else {
      this.isShowingSlackAuthen = false;
      this.isShowingSkypeIntegration = true;
    }
  }
  close() {
    this.ClosingAddingChannelModal.emit();
  }
  get f() { return this.form.controls; }
  onSubmit(){
    console.log(this.f.type.value)
    if (this.f.type.value=="skype"){

      window.alert("Sorry, Skype channel is not support in this time!")
    }
    else{
      const url= `https://slack.com/oauth/authorize?client_id=346859103684.1317997613826&scope=bot channels:read channels:write chat:write:bot chat:write:user commands groups:read groups:write im:read incoming-webhook team:read users:read&redirect_uri=https://channel.vngcloud.tech/service/${this.serviceid}/slack?name=${this.f.name.value}`
      //console.log(window.location)
      window.confirm("test")
      window.open(url,"_self")

    }
  }
}
