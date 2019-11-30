import { TestBed } from '@angular/core/testing';

import { RetriveInventoryService } from './retrive-inventory.service';

describe('RetriveInventoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetriveInventoryService = TestBed.get(RetriveInventoryService);
    expect(service).toBeTruthy();
  });
});
