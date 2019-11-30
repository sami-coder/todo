import { TestBed } from '@angular/core/testing';

import { RetriveRecipeService } from './retrive-recipe.service';

describe('RetriveRecipeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetriveRecipeService = TestBed.get(RetriveRecipeService);
    expect(service).toBeTruthy();
  });
});
