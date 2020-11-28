import { FaviconComponent, AppBar, PageScroller } from '../components'
import SocialFloatingActionButton from '../components/social-fab'

export default function HomePage () {
  return (
    <>
      <script src='//unpkg.com/prevent-pull-refresh' />
      <FaviconComponent />
      <AppBar />
      <PageScroller />
      <SocialFloatingActionButton />
    </>
  )
}
