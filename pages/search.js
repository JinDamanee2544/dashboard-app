import { useEffect, useState } from 'react'
import Content from '../components/Content'
import Sidebar from '../components/Sidebar'

const Search = () =>{
  const [posts,setPosts] = useState([]);
  const [searchWord,setSearchWord] = useState('');
  const keywords = ['title','body']


  useEffect(()=>{
    const url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(url).then(res=>res.json()).then((data)=>setPosts(data))
  },[])
  const filterFind = (word) => {
    console.log(word);
  }
  const searchPost=(posts)=>{
    const filteredPosts = posts.filter((post)=>{
      return keywords.some((filter=>{
        return post[filter].toString().toLowerCase().indexOf(searchWord.toLowerCase())>-1
      }))
    })
    return filteredPosts;
  }
  return (
    <>
      <main className='flex h-screen overflow-hidden'>
        <Sidebar/>
        <section className='p-10 overflow-scroll w-full'>
          <div className='flex justify-center mb-5'>
            <input type='text' className='shadow-xl bg-slate-100 w-full h-fit text-xl p-2 rounded-l' onChange={(e)=>setSearchWord(e.target.value)} value={searchWord}/>
          </div>
          {searchPost(posts).map((post)=>{
            return <Content key={post.id} {...post}></Content>
          })}
        </section>
      </main>
    
    </>
  )
}
export default Search;