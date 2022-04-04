import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '../../styles/homeBlog.module.css'

function index() {
  const [blog, setBlog] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3000/api/read`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data)
        // console.log(data)
      })
    // console.log('Use Effect is running ')
  }, [])
  return (
    <>
      <div className={styles.mainData}>
        {blog.map((items) => {
          return (
            <div key={items.title}>
              <h1>
                <Link href={`blogs/${items.slug}`}>{items.slug}</Link>
              </h1>
              <p>{items.content}</p>
              <h3>{items.author}</h3>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default index
