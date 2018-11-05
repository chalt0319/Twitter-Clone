import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postArray=[]

  addPost(value){
    this.postArray.push(value)
    console.log(this.postArray)
  }

}
