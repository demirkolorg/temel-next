import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div>
            <nav>
                <div className="logo"></div>
                <h1>apolaz</h1>





                <Link href="/"><a>Anasayfa</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/blogs"><a>List</a></Link>
            </nav>
        </div>
    )
}
