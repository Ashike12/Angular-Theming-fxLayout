import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGithubInfoComponent } from './user-github-info.component';

describe('UserGithubInfoComponent', () => {
  let component: UserGithubInfoComponent;
  let fixture: ComponentFixture<UserGithubInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGithubInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGithubInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
