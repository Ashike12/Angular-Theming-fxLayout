import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-github-info',
  templateUrl: './user-github-info.component.html',
  styleUrls: ['./user-github-info.component.scss']
})
export class UserGithubInfoComponent implements OnInit {

  constructor() { }
  defaultUser: string = "Ashike12";
  ngOnInit() {
    
  }

}
