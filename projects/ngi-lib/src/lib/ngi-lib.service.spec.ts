import { TestBed } from '@angular/core/testing';

import { NgiLibService } from './ngi-lib.service';

describe('NgiLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgiLibService = TestBed.get(NgiLibService);
    expect(service).toBeTruthy();
  });
});
