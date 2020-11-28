import React, { useEffect } from 'react'
import ReactPageScroller from 'react-page-scroller'
import IntroductionComponent from '../introduction'
import SkillsComponent from '../skills'
import ProficiencyComponent from '../proficiency'
import OtherSkillsComponent from '../other-skills'

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
          <circle className='hidden sm:block' cx='50%' cy='50%' r='8' />
          <circle className='block sm:hidden' cx='50%' cy='50%' r='6' />
        </svg>
      </button>
    )
  }

  return (
    <div className='h-auto w-auto mt-auto mb-auto ml-2 sm:mr-4'>
      <div className='flex flex-col space-between h-full'>
        {props.pages.map(i => {
          return (
            <div key={`indicator-dot-${i}`}>
              <IndicatorDot focused={props.focused === i} onClick={() => props.pageOnChange(i)} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function PageScroller (props) {
  const [currentPage, setCurrentPage] = React.useState(0)
  const [sm, setSm] = React.useState(false)

  const handlePageOnChange = (i) => {
    setCurrentPage(i)
  }

  useEffect(() => {
    if (window) {
      setSm(window.innerWidth >= 640)
    }
  }, [])

  return (
    <>
      <div className={props.className}>
        <div className='flex flex-row'>
          <Indicator focused={currentPage} pages={[0, 1, 2, 3]} pageOnChange={handlePageOnChange} />
          <ReactPageScroller
            pageOnChange={handlePageOnChange} customPageNumber={currentPage}
            transitionTimingFunction='ease' containerWidth='auto' containerHeight={sm ? '75vh' : '62.5vh'}
          >
            <IntroductionComponent className='w-full h-full' handleNextPage={() => setCurrentPage(1)} />
            <SkillsComponent className='w-full h-full' setCurrentPage={setCurrentPage} page={1} />
            <ProficiencyComponent className='w-full h-full' setCurrentPage={setCurrentPage} page={2} />
            <OtherSkillsComponent className='w-full h-full' setCurrentPage={setCurrentPage} page={3} />
          </ReactPageScroller>
        </div>
      </div>
    </>
  )
}
