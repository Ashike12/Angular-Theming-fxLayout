import { Component, OnInit } from '@angular/core';
import { UserGithubInfoService } from './srervices/user-github-info.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-user-github-info',
  templateUrl: './user-github-info.component.html',
  styleUrls: ['./user-github-info.component.scss']
})
export class UserGithubInfoComponent implements OnInit {

  userInfo: Object = {};
  userRepos: Object[] = [];
  defaultUser: string = "Ashike12";

  constructor(
    private githubService: UserGithubInfoService
  ) { }
  ngOnInit() {
    this.getGithubInfo();
  }

  getGithubInfo() {
    this.githubService.GithubUserInfo(this.defaultUser)
      .subscribe(data => {
        // this.userInfo["Name"] = data.login; 
        // this.userInfo["ReposCount"] = data.public_repos;
        // this.userInfo["GistsCount"] = data.public_gists;
        // this.userInfo["Bio"] = data.bio ? data.bio : "No bio added";
        // this.userInfo["CreatedAt"] = new Date(data.created_at);
        // this.userInfo["LastUpdatedAt"] = new Date(data.updated_at);
        this.userInfo = data;
      });
    this.githubService.GithubUserRepos(this.defaultUser)
      .subscribe(data => {
        this.userRepos = data;
      });
  }
  seeFullRepoModal(repo){
    console.log(repo);
  }

}
