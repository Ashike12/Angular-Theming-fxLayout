import { TestBed } from '@angular/core/testing';

import { UserGithubInfoService } from './user-github-info.service';

describe('UserGithubInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserGithubInfoService = TestBed.get(UserGithubInfoService);
    expect(service).toBeTruthy();
  });
});
