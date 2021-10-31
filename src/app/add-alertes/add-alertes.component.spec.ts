import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAlertesComponent } from './add-alertes.component';

describe('AddAlertesComponent', () => {
  let component: AddAlertesComponent;
  let fixture: ComponentFixture<AddAlertesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAlertesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAlertesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
