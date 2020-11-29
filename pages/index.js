import Head from 'next/head'
import { FaviconComponent, AppBar, PageScroller, SocialFloatingActionButton, FooterComponent, GithubStats } from '../components'

export default function HomePage () {
  return (
    <>
      <Head>
        <title> supercmmetry </title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta name='description' content='supercmmetry portfolio' />
        {/* <script src='https://unpkg.com/prevent-pull-refresh' /> */}
      </Head>
      <FaviconComponent />
      <AppBar />
      <div className='flex flex-row ml-auto mr-auto sm:ml-0 sm:mr-0'>
        <PageScroller className='ml-auto mr-auto sm:mt-20 sm:ml-10 sm:mr-0' />
        <GithubStats className='ml-auto mt-5 mr-5 hidden sm:block' />
      </div>
      <SocialFloatingActionButton />
      <FooterComponent />
    </>
  )
}
