import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function main() {
  const [blogs, setBlogs] = useState()
  const router = useRouter()
  useEffect(() => {
    if (!router.isReady) return
    const { slug } = router.query
    fetch(`http://localhost:3000/api/getBlogs?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data)
      })
  }, [router.isReady])
  return (
    <>
      <h2>{blogs && blogs.title}</h2>
      <div>{blogs && blogs.content}</div>
    </>
  )
}

export default main
