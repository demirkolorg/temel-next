import styles from '../../styles/Home.module.css'

import React from 'react'

export default function Detay({blog}) {
    console.log(blog);
    return (
        <div>
            <h1 className={styles.title}>blog detay</h1>
               <div key={blog.id}>
                    <a className={styles.title}><h3>{blog.title}</h3></a>
                    <p className={styles.description}>{blog.body}</p>
                </div>
        </div>
    )
}

export const getServerSideProps = async (context) => {

    const id = context.query.id
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id)
    const data = await res.json()

    return {
        props: {
            blog: data
        }
    }
}