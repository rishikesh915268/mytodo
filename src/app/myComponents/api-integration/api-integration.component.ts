import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'app-api-integration',
  templateUrl: './api-integration.component.html',
  styleUrls: ['./api-integration.component.css']
})

export class ApiIntegrationComponent implements OnInit{
  username:string = "rishi355";
  userProfile:any;
  userRepos:any[] = [];

  constructor(private githubServices:GithubService){

  }

  ngOnInit(): void {
    this.getUserData(this.username);
  }
  getUserData(username:string){
    this.githubServices.getUserProfile(username).subscribe(profile=>{
      this.userProfile = profile;
    },
    error=>{
      console.error('Error in fetching user profile', error);
    });

    this.githubServices.getUserRepos(username).subscribe(repos=>{
      this.userRepos = repos;
    },
    error=>{
      console.error('Error in fetching user repos', error);
    }
    );
  }

}

