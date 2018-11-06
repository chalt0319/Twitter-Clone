import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postArray=[]

  addPost(value, image, link){
    let hash = {text: value, likes: 0, image: image, link: link}
    this.postArray.push(hash)
  }

  likePost(post){

    this.postArray.map(function(thePost) {
      if (thePost === post){
        return thePost.likes += 1
      }
    })
  }


}
