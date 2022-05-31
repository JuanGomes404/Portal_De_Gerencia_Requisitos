import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraRequisitoComponent } from './cadastra-requisito.component';

describe('CadastraRequisitoComponent', () => {
  let component: CadastraRequisitoComponent;
  let fixture: ComponentFixture<CadastraRequisitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraRequisitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraRequisitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
