import React from 'react'
import ReactPageScroller from 'react-page-scroller'
import IntroductionComponent from '../introduction'
import SkillsComponent from '../skills'

export default function PageScroller (props) {
  const [currentPage, setCurrentPage] = React.useState(0)

  const handlePageOnChange = (i) => {
    setCurrentPage(i)
  }

  return (
    <>
      <div className={props.className}>
        <ReactPageScroller
          pageOnChange={handlePageOnChange} customPageNumber={currentPage}
          transitionTimingFunction='ease' containerWidth='100%' containerHeight='60vh'
        >
          <IntroductionComponent className='w-full h-full' />
          <SkillsComponent className='w-full h-full' />
        </ReactPageScroller>
      </div>
    </>
  )
}
