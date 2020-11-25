import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function HomePage () {
  const router = useRouter()

  return (
    <>
      <Head>
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <h1> My Portfolio </h1>
      <button onClick={() => {
        router.push('/about')
      }}
      >
        click me
      </button>
    </>
  )
}
