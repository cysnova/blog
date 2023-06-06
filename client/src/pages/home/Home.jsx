import './home.css'
import Header from '../../components/header/Header'
import SideBar from '../../components/sidebar/SideBar'
import Posts from '../../components/posts/Posts'
import axios from "axios";
import { useState,useEffect } from 'react';
import { useLocation } from "react-router";
const Home = () => {

  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data)
    };
    fetchPosts();
  }, [search]);

  return (
    <> 
    <Header/>
      <div className='home'>
         
          <Posts posts={posts}/>
          <SideBar/>
      </div>
    
    </>
    
  )
}

export default Home