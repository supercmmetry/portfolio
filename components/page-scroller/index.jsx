import React from 'react'
import ReactPageScroller from 'react-page-scroller'
import IntroductionComponent from '../introduction'
import SkillsComponent from '../skills'
import ProficiencyComponent from '../proficiency'


function Indicator (props) {
  const IndicatorDot = (props) => {
    let extra = ''

    if (props.focused) {
      extra += ' fill-hover'
    } else {
      extra += ' fill-foreground'
    }

    return (
      <button className='focus:outline-none' onClick={props.onClick}>
        <svg className={'w-6 h-6 mb-4 ' + extra} key={props.key}>
          <circle cx='50%' cy='50%' r='8' />
        </svg>
      </button>
    )
  }

  return (
    <div className='h-auto w-auto mt-auto mb-auto ml-2 sm:mr-4'>
      <div className='flex flex-col space-between h-full'>
        {props.pages.map(i => {
          return <IndicatorDot key={`indicator-dot-${i}`} focused={props.focused === i} onClick={() => props.pageOnChange(i)} />
        })}
      </div>
    </div>
  )
}

export default function PageScroller (props) {
  const [currentPage, setCurrentPage] = React.useState(0)

  const handlePageOnChange = (i) => {
    setCurrentPage(i)
  }

  return (
    <>
      <div className={props.className}>
        <div className='flex flex-row'>
          <Indicator focused={currentPage} pages={[0, 1, 2]} pageOnChange={handlePageOnChange} />
          <ReactPageScroller
            pageOnChange={handlePageOnChange} customPageNumber={currentPage}
            transitionTimingFunction='ease' containerWidth='auto' containerHeight='65vh'
          >
            <IntroductionComponent className='w-full h-full' handleNextPage={() => setCurrentPage(1)} />
            <SkillsComponent className='w-full h-full' setCurrentPage={setCurrentPage} page={1} />
            <ProficiencyComponent className='w-full h-full' setCurrentPage={setCurrentPage} page={2} />
          </ReactPageScroller>
        </div>
      </div>
    </>
  )
}
