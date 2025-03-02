import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './models';
import { url } from 'inspector';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  BASE_URL:string = 'https://jsonplaceholder.typicode.com';

  constructor(private client:HttpClient) { }
  getPosts():Observable<Post[]>{
    return this.client.get<Post[]>(`${this.BASE_URL}/posts`);
  }
  getPost(id:number): Observable<Post>{
    return this.client.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
  deletPost(id:number){
    return this.client.delete(`${this.BASE_URL}/posts/${id}`)
  }
}
