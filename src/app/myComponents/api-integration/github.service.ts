import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GithubService{
  private baseurl:string = 'https://api.github.com';

  constructor(private http:HttpClient){

  }

  getUserRepos(username:string):Observable<any>{
    return this.http.get<any>(`${this.baseurl}/users/${username}/repos`);
  }

  getUserProfile(username:string):Observable<any>{
    return this.http.get<any>(`${this.baseurl}/users/${username}`)
  }
}


