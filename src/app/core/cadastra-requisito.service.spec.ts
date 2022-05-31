import { TestBed } from '@angular/core/testing';

import { CadastraRequisitoService } from './cadastra-requisito.service';

describe('CadastraRequisitoService', () => {
  let service: CadastraRequisitoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastraRequisitoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
