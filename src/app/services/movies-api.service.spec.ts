import { TestBed } from '@angular/core/testing';

import { MoviesAPIService } from './movies-api.service';

describe('MoviesAPIService', () => {
  let service: MoviesAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
