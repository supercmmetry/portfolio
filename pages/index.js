import { FaviconComponent, AppBar, PageScroller, SocialFloatingActionButton, FooterComponent, GithubStats } from '../components'

export default function HomePage () {
  return (
    <>
      <script src='https://unpkg.com/prevent-pull-refresh' />
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
