import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const [blog, setBlog] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3000/api/read`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data)
        console.log(data)
      })
    console.log('Use Effect is running ')
  }, [])
  return (
    <>
      <div className={styles.mainImg}>
        <Image src="/code.jpg" height={300} width={320}></Image>
      </div>
      <div className={styles.mainContainer}>
        <h1>Code Side</h1>
      </div>
      <div className="content">
        <div className={styles.blogsPreview}>
          <h1>Learn this programing languages</h1>
          <div className={styles.data}>
            {blog.map((data) => {
              return (
                <div key={data.slug}>
                  <h3>
                    {data.title.charAt(0).toUpperCase() + data.title.slice(1)}
                  </h3>
                </div>
               ) 
            })}
          </div>
        </div>
      </div>
    </>
  )
}
