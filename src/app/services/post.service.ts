import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url:string= 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
   }


   getPosts(){
    return this.http.get(this.url);
   }

   createPost(post:any){
    return this.http.post<any>(this.url, post);
   }

   updatePost(post:any){
    return this.http.put(this.url+ '/' + post.id, post);
   }

   deletePost(id:string){
    return this.http.delete(this.url + '/' + id);
   }




}
