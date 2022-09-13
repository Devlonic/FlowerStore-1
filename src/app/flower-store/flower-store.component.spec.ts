import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerStoreComponent } from './flower-store.component';

describe('FlowerStoreComponent', () => {
  let component: FlowerStoreComponent;
  let fixture: ComponentFixture<FlowerStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowerStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowerStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
