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
  isUserAvailable: boolean = true;

  constructor(
    private githubService: UserGithubInfoService
  ) { }
  ngOnInit() {
    //this.getGithubInfo();
  }

  getGithubInfo(userName) {
    this.githubService.GithubUserInfo(userName)
      .subscribe(data => {
        // this.userInfo["Name"] = data.login; 
        // this.userInfo["ReposCount"] = data.public_repos;
        // this.userInfo["GistsCount"] = data.public_gists;
        // this.userInfo["Bio"] = data.bio ? data.bio : "No bio added";
        // this.userInfo["CreatedAt"] = new Date(data.created_at);
        // this.userInfo["LastUpdatedAt"] = new Date(data.updated_at);
        this.userInfo = data;
        this.githubService.GithubUserRepos(userName)
          .subscribe(data => {
            if (_.isArray(data)) {
              this.userRepos = [];
              if (data.length > 0) {
                this.userRepos = data;
              } else {
                this.userRepos.push({
                  "name": "No repo is found for user: " + userName
                })
              }
            }
          });
      }, error => {
        if (error) {
          this.isUserAvailable = false;
        }
      });
  }
  seeFullRepoModal(repo) {
    console.log(repo);
  }

}
