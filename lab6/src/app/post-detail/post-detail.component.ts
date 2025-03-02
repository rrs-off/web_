import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { observeNotification } from 'rxjs/internal/Notification';
import { POSTS } from '../fake-db';
import { Post } from '../models';
import { PostService } from '../post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent implements OnInit{
  post!: Post;
  loaded: boolean = false;
    constructor(private route: ActivatedRoute,
      private postService: PostService){
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap):void =>{
      const postId:number | null = Number(params.get('postId'));
      this.loaded = false;
      this.postService.getPost(postId).subscribe((post:Post) : void => {
        this.post  = post;
        this.loaded = true;
      })
      // this.post = POSTS.find((post:Post):boolean => post.id === postId) as Post ;
    })
  }
}
