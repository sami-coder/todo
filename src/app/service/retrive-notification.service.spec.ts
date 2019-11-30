import { TestBed } from '@angular/core/testing';

import { RetriveNotificationService } from './retrive-notification.service';

describe('RetriveNotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetriveNotificationService = TestBed.get(RetriveNotificationService);
    expect(service).toBeTruthy();
  });
});
