import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalationPolicyComponent } from './escalation-policy.component';

describe('EscalationPolicyComponent', () => {
  let component: EscalationPolicyComponent;
  let fixture: ComponentFixture<EscalationPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscalationPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscalationPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
