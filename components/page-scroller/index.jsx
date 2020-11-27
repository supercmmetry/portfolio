import IntroductionComponent from '../introduction'

export default function PageScroller (props) {
  return (
    <>
      <div className={props.className}>
        <IntroductionComponent />
      </div>
    </>
  )
}
