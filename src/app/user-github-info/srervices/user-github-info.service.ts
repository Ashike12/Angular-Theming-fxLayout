import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGithubInfoService {


  constructor(
    private http: HttpClient
  ) { }

  GithubUserInfo(userName: string): Observable<any> {
    let url = "https://api.github.com/users/" + userName;
    return this.http.get(url);
  }

  GithubUserRepos(userName: string): Observable<any> {
    let url = "https://api.github.com/users/" + userName + "/repos";
    return this.http.get(url);
  }

}
