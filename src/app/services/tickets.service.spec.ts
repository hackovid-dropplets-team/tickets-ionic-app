import { TestBed } from '@angular/core/testing';

import { TicketService } from './tickets.service';

describe('TicketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TicketService = TestBed.get(TicketService);
    expect(service).toBeTruthy();
  });
});
