import './Posts.css'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { Post } from '../../Interface/posts'
import { uploads, userServices } from '../../services/api'
import {Link} from 'react-router-dom'

function Posts(){

    const {id}=useParams()
    const [post,setPost]=useState<Post>()
    const [categories,setCategories]=useState<String[]>([])

    useEffect(()=>{
        (async ()=> {
          const posts=await userServices.showPosts()

          const res=await userServices.showCategories()

          setCategories(res)

          posts.map((item : Post)=>{
            if(item.id===id){
                setPost(item)
                return true;
            }
            return false
          })
        })()
    
      },[id])

  return (
    <main className="post-container">
    { post &&
    <>
        <div className="content-container">
        <h1 className="main-title">{post.title}</h1>
        <p className="post-description">{post.description}</p>
        <div className="img-container">
            <img src={`${uploads}${post.img}`} alt={'' + post.title}/>
        </div>
        <p className="post-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, explicabo provident, voluptatum, veniam nihil repellat eveniet quae adipisci exercitationem quos minus corrupti placeat veritatis architecto excepturi laudantium nulla tenetur cupiditate.
        Odit saepe voluptas voluptates, iusto minima dolore deleniti corporis itaque, rem facere inventore in sed cumque voluptatibus unde! Assumenda nam aspernatur eveniet id illo inventore ratione laboriosam iusto culpa provident.
        Nam blanditiis autem fugiat officiis animi, adipisci consequuntur minima. Mollitia atque iste sapiente quod pariatur necessitatibus minus voluptatem rerum eos modi enim perspiciatis provident ducimus, iure nostrum nobis eum iusto.
        Perspiciatis sed numquam animi quae assumenda nesciunt voluptatibus rem! Deserunt, quae ex, pariatur nemo eveniet ipsam delectus aperiam aut quas blanditiis repellat quibusdam debitis sequi odit nostrum? Dolores, iure quam!
        Beatae vel corrupti laborum repudiandae, placeat neque officiis odit provident reiciendis ducimus amet rem. Exercitationem similique itaque labore asperiores quasi officia aspernatur quas soluta quos. Quasi aliquam in laboriosam illum.</p>
        <p className="post-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, explicabo provident, voluptatum, veniam nihil repellat eveniet quae adipisci exercitationem quos minus corrupti placeat veritatis architecto excepturi laudantium nulla tenetur cupiditate.
        Odit saepe voluptas voluptates, iusto minima dolore deleniti corporis itaque, rem facere inventore in sed cumque voluptatibus unde! Assumenda nam aspernatur eveniet id illo inventore ratione laboriosam iusto culpa provident.
        Nam blanditiis autem fugiat officiis animi, adipisci consequuntur minima. Mollitia atque iste sapiente quod pariatur necessitatibus minus voluptatem rerum eos modi enim perspiciatis provident ducimus, iure nostrum nobis eum iusto.
        Perspiciatis sed numquam animi quae assumenda nesciunt voluptatibus rem! Deserunt, quae ex, pariatur nemo eveniet ipsam delectus aperiam aut quas blanditiis repellat quibusdam debitis sequi odit nostrum? Dolores, iure quam!
        Beatae vel corrupti laborum repudiandae, placeat neque officiis odit provident reiciendis ducimus amet rem. Exercitationem similique itaque labore asperiores quasi officia aspernatur quas soluta quos. Quasi aliquam in laboriosam illum.</p>
        </div>
        <aside className="nav-container">
        <h3 className="tags-title">Tags</h3>
        <ul className="tag-list">
            {post.tags.length!==0 && post.tags.map((tag,index) =>(
                <li key={index}><Link to='/'>{tag}</Link></li>
            ))}           
        </ul>
        <h3 className="categories-title">Categorias</h3>
        <ul className="categories-list">
            {categories && categories.map((category,index)=>(
                <li key={index}><Link to='/'>{category}</Link></li>
            ))}
        </ul>
        </aside>
    </>

    }
  </main>
  )
}

export default Posts