import ProfilePictureImage from '../../assets/image/rory.jpg'

export default function ProfilePictureComponent (props) {
  return (
    <>
      <div className={props.className}>
        <img
          src={ProfilePictureImage} style={{
            borderRadius: '50%'
          }} className={'border-normal border-2 ' + props.innerStyle}
        />
      </div>
    </>
  )
}
