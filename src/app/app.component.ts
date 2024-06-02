import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "Welcome! User";

  constructor(){
    // setTimeout(()=>{
    //   this.title = "Welcome! Rishi"
    // },2000)
  }
}
