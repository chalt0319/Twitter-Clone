import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postArray=[]

  addPost(value){
    let hash = {text: value, likes: 0}
    this.postArray.push(hash)
  }

  likePost(post){

    this.postArray.map(function(thePost) {
      if (thePost.text === post.text){
        return thePost.likes += 1
      }
    })
  }

}
