import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRoutingKeyComponent } from './create-routing-key.component';

describe('CreateRoutingKeyComponent', () => {
  let component: CreateRoutingKeyComponent;
  let fixture: ComponentFixture<CreateRoutingKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRoutingKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRoutingKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
