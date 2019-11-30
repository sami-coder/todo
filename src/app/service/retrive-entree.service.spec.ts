import { TestBed } from '@angular/core/testing';

import { RetriveEntreeService } from './retrive-entree.service';

describe('RetriveEntreeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetriveEntreeService = TestBed.get(RetriveEntreeService);
    expect(service).toBeTruthy();
  });
});
