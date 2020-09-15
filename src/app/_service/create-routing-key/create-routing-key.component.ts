import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-routing-key',
  templateUrl: './create-routing-key.component.html',
  styleUrls: ['./create-routing-key.component.scss']
})
export class CreateRoutingKeyComponent implements OnInit {
  @Output() ClosingCreatingKeyModal = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  close() {
    this.ClosingCreatingKeyModal.emit();
  }

}
