import { TestBed } from '@angular/core/testing';

import { RetriveRestaurantService } from './retrive-restaurant.service';

describe('RetriveRestaurantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetriveRestaurantService = TestBed.get(RetriveRestaurantService);
    expect(service).toBeTruthy();
  });
});
