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
  const triggeredStyle = (x) => {
    if (props.triggered) {
      return x + ' opacity-100'
    }

    return 'opacity-0'
  }

  return (
    <>
      <AbstractFloatingActionButton innerStyle='wh-5-i' type='mail' className={triggeredStyle('polar-deg180') + ' wh-9-i smooth-transition ' + props.className} />
      <AbstractFloatingActionButton innerStyle='wh-5-i' type='telegram' className={triggeredStyle('polar-deg150') + ' wh-9-i smooth-transition ' + props.className} />
      <AbstractFloatingActionButton innerStyle='wh-5-i' type='linkedin' className={triggeredStyle('polar-deg120') + ' wh-9-i smooth-transition ' + props.className} />
      <AbstractFloatingActionButton innerStyle='wh-5-i' type='github' className={triggeredStyle('polar-deg90') + ' wh-9-i smooth-transition ' + props.className} />
    </>
  )
}

function AbstractFloatingActionButton (props) {
  if (props.type === 'contact') {
    return (
      <button className={'rounded-full bg-background w-14 h-14 border-2 border-foreground focus:outline-none no-tap-highlight ' + props.className} onClick={props.onClick}>
        <SocialButton raw type={props.type} className={'align-vh-center ' + props.innerStyle} />
      </button>
    )
  }

  return (
    <button className={'rounded-full bg-background w-14 h-14 border-2 border-foreground focus:outline-none no-tap-highlight ' + props.className} onClick={() => execActionFromType(props.type)}>
      <SocialButton raw type={props.type} className={'align-vh-center ' + props.innerStyle} />
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
        <RotationAnimation triggered={expanded} className='w-14 h-14'>
          <AbstractFloatingActionButton type='contact' onClick={handleOnClick} />
        </RotationAnimation>
      </div>
      <SocialButtonExpander triggered={expanded} className='layer-mid fixed right-7 bottom-7 sm:hidden block' />
    </>
  )
}
