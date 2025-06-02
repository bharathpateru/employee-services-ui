import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts:any;
 

  constructor(private service: PostService) {
    this.service.getPosts()
    .subscribe((response) =>{
      this.posts=response;
      console.log(response);
    });

   }

   createPost(input: HTMLInputElement){
    let post:any = {title: input.value}
    input.value='';

    this.service.createPost(post)
    .subscribe((response) => {
      post['id'] = response.id;
      this.posts.splice(0,0,post);
      console.log("response -------->"+response);
    });
   }

   updatePost(post:any){
    this.service.updatePost(post)
    .subscribe((response) =>{
      console.log("response -------->"+response);
    });
   }


   /*deletePost(post:any){
    this.service.deletePost(post.id)
    .subscribe((response) =>{
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
      console.log("response -------->"+response);
    }, (error: Response) => {
        if(error.status === 404){
          alert('this post has been already deleted');
        }else{
          alert('An UnExpected error occurred');
          console.log(error);
        }
    }, ()=>{
      alert('An UnExpected error occurred');
    } );
   }*/

    deletePost(post: any) {
      this.service.deletePost(post.id).subscribe({
        next: (response) => {
          const index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
          console.log("response -------->" + response);
        },
        error: (error: Response) => {
          if (error.status === 404) {
            alert('This post has already been deleted');
          } else {
            alert('An unexpected error occurred');
            console.log(error);
          }
        },
        complete: () => {
          console.log('Delete operation completed.');
        }
      });
    }


   
    

  ngOnInit(): void {
    this.service.getPosts()
    .subscribe((response)=>{
      this.posts=response;
    });
  }

  

}
