import { useEffect, useState } from "react"
import Header from "../../components/header/Header"
import Post from "../../components/posts/Post"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.css"
import axios from "axios"
import { useLocation } from "react-router-dom"

export default function Home() {
  const [posts, setPosts] = useState([])
  const {search} = useLocation()

  useEffect(()=>{
    const fetchPosts = async () =>{
      const res = await axios.get("/posts" + search)
     setPosts(res.data)
    }
    fetchPosts()
    
  }, [search])
  return (
    <>
     <Header />
    <div className="home">
     <Post posts = {posts} />
     <Sidebar />
    </div>
    </>
  )
}
