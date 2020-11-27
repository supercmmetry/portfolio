import { FaviconComponent, AppBar, PageScroller } from '../components'

export default function HomePage () {
  return (
    <>
      <FaviconComponent />
      <AppBar />
      <PageScroller className='p-4 ml-auto mr-auto sm:ml-0 sm:mr-0 w-auto' />
    </>
  )
}
