import { Component, OnInit } from '@angular/core';
import { Post } from '../models';
import { POSTS } from '../fake-db';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostService } from '../post.service';
@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  posts!: Post[];
  loaded:boolean = false;
  constructor(private postService: PostService){
  }
  ngOnInit(): void {
      this.getPosts();
  }
  getPosts(): void {
      // this.posts = POSTS;
      this.loaded = false;
    this.postService.getPosts().subscribe((posts:Post[]):void =>  {
      this.posts = posts;
      this.loaded = true;
    });
  }
  deletePost(id:number){
    this.posts = this.posts.filter((p:Post) => p.id !== id);
    this.postService.deletPost(id).subscribe(()=>{
      console.log('deleted');
    })
  }
}
