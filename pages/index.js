import { FaviconComponent, AppBar, PageScroller, SocialFloatingActionButton, FooterComponent } from '../components'

export default function HomePage () {
  return (
    <>
      <script src='http://unpkg.com/prevent-pull-refresh' />
      <FaviconComponent />
      <AppBar />
      <PageScroller className='sm:mt-20 sm:ml-10' />
      <SocialFloatingActionButton />
      <FooterComponent />
    </>
  )
}
