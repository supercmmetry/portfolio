import React from 'react'
import { execActionFromType } from '../../utils/actions'
import SocialButton from '../social-button'

function RotationAnimation (props) {
  return (
    <div className={'overflow-hidden ' + (props.triggered ? 'cubic-bezier-transition rotate-360 ' : 'cubic-bezier-transition ') + props.className}>
      {props.children}
    </div>
  )
}

function SocialButtonExpander (props) {
  const polarStyle = (x) => {
    if (props.triggered) {
      return x
    }

    return ''
  }

  return (
    <>
      <AbstractFloatingActionButton type='mail' className={polarStyle('polar-deg180') + ' w-14 h-14 smooth-transition ' + props.className} />
      <AbstractFloatingActionButton type='telegram' className={polarStyle('polar-deg150') + ' w-14 h-14 smooth-transition ' + props.className} />
      <AbstractFloatingActionButton type='linkedin' className={polarStyle('polar-deg120') + ' w-14 h-14 smooth-transition ' + props.className} />
      <AbstractFloatingActionButton type='github' className={polarStyle('polar-deg90') + ' w-14 h-14 smooth-transition ' + props.className} />
    </>
  )
}

function AbstractFloatingActionButton (props) {
  if (props.type === 'contact') {
    return (
      <div className={props.className}>
        <button className='rounded-full bg-background w-14 h-14 border-2 border-foreground focus:outline-none no-tap-highlight' onClick={props.onClick}>
          <SocialButton raw type={props.type} className='align-vh-center' />
        </button>
      </div>
    )
  }

  return (
    <div className={props.className}>
      <button className='rounded-full bg-background w-14 h-14 border-2 border-foreground focus:outline-none no-tap-highlight' onClick={() => execActionFromType(props.type)}>
        <SocialButton raw type={props.type} className='align-vh-center' />
      </button>
    </div>
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
        <RotationAnimation triggered={expanded} className='w-14 h-14'>
          <AbstractFloatingActionButton type='contact' onClick={handleOnClick} />
        </RotationAnimation>
      </div>
      <SocialButtonExpander triggered={expanded} className='layer-mid fixed right-5 bottom-5 sm:hidden block' />
    </>
  )
}
