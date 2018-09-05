import { TestBed, inject } from '@angular/core/testing';

import { ConnectionRoutesService } from './connection-routes.service';

describe('ConnectionRoutesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConnectionRoutesService]
    });
  });

  it('should be created', inject([ConnectionRoutesService], (service: ConnectionRoutesService) => {
    expect(service).toBeTruthy();
  }));
});
