import { Post } from "./models";
export const POSTS:Post[]= [];

for(let i:number = 0;i < 10;i++){
    POSTS.push(
        {
            id:i+1,
            title:`name ${i + 1}`,
            body:"Lorem",
        }
    )
    
}
