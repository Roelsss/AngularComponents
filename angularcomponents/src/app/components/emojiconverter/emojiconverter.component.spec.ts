import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiconverterComponent } from './emojiconverter.component';

describe('EmojiconverterComponent', () => {
  let component: EmojiconverterComponent;
  let fixture: ComponentFixture<EmojiconverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmojiconverterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmojiconverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
