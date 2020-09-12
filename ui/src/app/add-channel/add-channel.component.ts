import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-channel',
  templateUrl: './add-channel.component.html',
  styleUrls: ['./add-channel.component.scss']
})
export class AddChannelComponent implements OnInit {

  isShowingAdvanced = false;
  isShowingSlackAuthen = true;
  isShowingSkypeIntegration = false;

  constructor() { }

  ngOnInit(): void {
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

}
