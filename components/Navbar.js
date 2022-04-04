import React from 'react'
import Link from 'next/link'
import styles from '../styles/nav.module.css'

function Navbar() {
  return (
    <>
      <div className={styles.nav}>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/blogs">
              <a>Blogs</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
