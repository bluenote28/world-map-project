import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactsboxComponent } from './factsbox.component';

describe('FactsboxComponent', () => {
  let component: FactsboxComponent;
  let fixture: ComponentFixture<FactsboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactsboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FactsboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
