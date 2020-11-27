import React from 'react'
import { execActionFromType } from '../../utils/actions'
import SocialButton from '../social-button'

function RotationAnimation (props) {
  return (
    <div className={props.triggered ? 'smooth-transition rotate-360' : 'smooth-transition'}>
      {props.children}
    </div>
  )
}

function AbstractFloatingActionButton (props) {
  if (props.type === 'contact') {
    return (
      <button className='rounded-full w-14 h-14 border-2 border-foreground focus:outline-none no-tap-highlight' onClick={props.onClick}>
        <SocialButton raw type={props.type} className='align-vh-center' />
      </button>
    )
  }

  return (
    <button className='rounded-full w-14 h-14 border-2 border-foreground focus:outline-none no-tap-highlight' onClick={() => execActionFromType(props.type)}>
      <SocialButton raw type={props.type} className='align-vh-center' />
    </button>
  )
}

export default function SocialFloatingActionButton (props) {
  const [expanded, setExpanded] = React.useState(false)
  const handleOnClick = () => {
    setExpanded(!expanded)
  }

  return (
    <>
      <div className={'layer-high fixed right-5 bottom-5 sm:hidden block ' + props.className}>
        <RotationAnimation triggered={expanded}>
          <AbstractFloatingActionButton type='contact' onClick={handleOnClick} />
        </RotationAnimation>
      </div>
    </>
  )
}
