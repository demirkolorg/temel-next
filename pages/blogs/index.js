import React from 'react'
import styles from "../../styles/Home.module.css"
import Link from 'next/link'

export default function Blogs({ bloglar }) {
    return (
        <div>
            <h1 className={styles.title}>bloglar</h1>
            {bloglar.map(b => (
               <Link href={`/blogs/${b.id}`} key={b.id}>
               <div key={b.id}>
                    <a className={styles.title}><h3>{b.title}</h3></a>
                </div>
               </Link>
            ))}


        </div>
    )
}

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    return {
        props: {
            bloglar: data.slice(0, 10)
        }
    }
}