import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReccComponent } from './card-recc.component';

describe('CardReccComponent', () => {
  let component: CardReccComponent;
  let fixture: ComponentFixture<CardReccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardReccComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardReccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
