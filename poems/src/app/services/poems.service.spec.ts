import { TestBed } from '@angular/core/testing';

import { PoemsService } from './poems.service';

describe('PoemService', () => {
  let service: PoemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
