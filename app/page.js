"use client"
import { useEffect, useState } from 'react'
import Form from '../Components/Form/Form'
import UserCard from '../Components/UserCard/UserCard'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
const [input,setInput]=useState('')
const [data , setData]=useState({})

async function  fetchData(){
   const response = await fetch(`https://api.github.com/users/${input}`)
  const result = await response.json();
  setData(result)
}

useEffect(()=>{
  fetchData()
},[input])

  return (
    <div className="card">
      <Form input = {input} setInput={setInput} />
      <UserCard data={data} />
    </div>
  );
}
