import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerBundleComponent } from './flower-bundle.component';

describe('FlowerBundleComponent', () => {
  let component: FlowerBundleComponent;
  let fixture: ComponentFixture<FlowerBundleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowerBundleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowerBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
