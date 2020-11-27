import ProfilePictureImage from '../../assets/image/rory.jpg'

export default function ProfilePictureComponent (props) {
  return (
    <>
      <div className={props.className}>
        <img
          src={ProfilePictureImage} style={{
            borderRadius: '50%',
            width: '128px',
            height: '128px',
            minWidth: '128px',
            minHeight: '128px'
          }} className='border-normal border-2'
        />
      </div>
    </>
  )
}
