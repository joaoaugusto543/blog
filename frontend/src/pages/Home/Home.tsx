import './Home.css'
import { useEffect, useState } from 'react'
import { uploads, userServices } from '../../services/api'
import {Link} from 'react-router-dom'
import { Post } from '../../Interface/posts'

function Home(){

  const [posts,setPosts]=useState<Post[]>([])

  useEffect(()=>{
    (async ()=> {
      const res=await userServices.showPosts()
      setPosts(res)
    })()

  },[])

  return (
    <main>
    <div className="title-container">
      <h1>Blog Codar</h1>
      <p>O seu blog de programação</p>
    </div>
    <div className="posts-container">
      { posts.length >0 && posts.map((post:Post,index)=>(
        <div key={index} className="post-box">
          <img src={`${uploads}${post.img}`} alt={'' + post.title}/>
          <h2 className="post-title">
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </h2>
        <p className="post-description">{post.description}</p>
        <div className="tags-container">
          {post.tags && post.tags.map((tag,index)=>(
            <Link key={index} to='/'>{tag}</Link>
          ))}
        </div>
      </div>
      ))
      } 

      
    </div>
  </main>
  )
}

export default Home