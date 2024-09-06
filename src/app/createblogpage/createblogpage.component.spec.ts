import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateblogpageComponent } from './createblogpage.component';

describe('CreateblogpageComponent', () => {
  let component: CreateblogpageComponent;
  let fixture: ComponentFixture<CreateblogpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateblogpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateblogpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
