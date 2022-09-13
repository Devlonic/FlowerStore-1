import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerBundlesListComponent } from './flower-bundles-list.component';

describe('FlowerBundlesListComponent', () => {
  let component: FlowerBundlesListComponent;
  let fixture: ComponentFixture<FlowerBundlesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowerBundlesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowerBundlesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
