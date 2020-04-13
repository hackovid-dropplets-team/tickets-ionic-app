import { TestBed } from '@angular/core/testing';

import { XatsService } from './xats.service';

describe('XatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XatsService = TestBed.get(XatsService);
    expect(service).toBeTruthy();
  });
});
