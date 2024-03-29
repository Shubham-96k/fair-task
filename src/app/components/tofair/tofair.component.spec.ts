import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TofairComponent } from './tofair.component';

describe('TofairComponent', () => {
  let component: TofairComponent;
  let fixture: ComponentFixture<TofairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TofairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TofairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
