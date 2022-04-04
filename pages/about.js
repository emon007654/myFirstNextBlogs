import React, { useState, useEffect } from 'react'

function about() {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3000/api/read`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data)
      })
  }, [])

  return (
    <>
      {blogs.map((data) => {
        return (
          <div key={data.title}>
            <h1>{data.title}</h1>
            <p>{data.content}</p>
          </div>
        )
      })}
    </>
  )
}

export default about
