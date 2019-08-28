import { TestBed } from '@angular/core/testing';

import { UserServiceService } from './user-service.service';

describe('CustomerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserServiceService = TestBed.get(UserServiceService);
    expect(service).toBeTruthy();
  });
});
 