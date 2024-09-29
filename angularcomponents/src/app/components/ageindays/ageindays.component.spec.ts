import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeindaysComponent } from './ageindays.component';

describe('AgeindaysComponent', () => {
  let component: AgeindaysComponent;
  let fixture: ComponentFixture<AgeindaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgeindaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeindaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
