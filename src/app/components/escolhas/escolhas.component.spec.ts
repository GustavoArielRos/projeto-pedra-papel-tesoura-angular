import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhasComponent } from './escolhas.component';

describe('EscolhasComponent', () => {
  let component: EscolhasComponent;
  let fixture: ComponentFixture<EscolhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EscolhasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EscolhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
