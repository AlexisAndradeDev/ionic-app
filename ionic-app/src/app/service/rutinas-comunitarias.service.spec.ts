import { TestBed } from '@angular/core/testing';

import { RutinasComunitariasService } from './rutinas-comunitarias.service';

describe('RutinasComunitariasService', () => {
  let service: RutinasComunitariasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RutinasComunitariasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
