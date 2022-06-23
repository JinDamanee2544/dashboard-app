import Link from 'next/link'
import { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'

export default function App() {

  return (
    <>
      <main className='flex h-screen overflow-hidden'>
        <Sidebar/>
        <section className='p-10 overflow-scroll w-full'>
          <div className='m-5 flex justify-center p-5'>
            <h1 className='text-5xl font-bold'> <span className='text-orange-500'>JinDamanee</span> Work-Space! </h1>
          </div>
          <div className='flex justify-center mb-5'>
            <Link href={'/search'}>
              <button className='bg-orange-500 p-5 rounded shadow-xl text-white text-xl font-bold hover:scale-105 duration-200 hover:bg-orange-700'>Search Posts</button>
            </Link>
          </div>
        </section>
      </main>
    
    </>
  )
}
