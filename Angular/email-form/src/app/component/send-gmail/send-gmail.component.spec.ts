import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendGmailComponent } from './send-gmail.component';

describe('SendGmailComponent', () => {
  let component: SendGmailComponent;
  let fixture: ComponentFixture<SendGmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendGmailComponent]
    });
    fixture = TestBed.createComponent(SendGmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
