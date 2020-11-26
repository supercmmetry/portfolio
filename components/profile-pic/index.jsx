import ProfilePictureImage from '../../assets/image/rory.jpg'

export default function ProfilePictureComponent() {
  return (
    <>
      <div >
        <img src={ProfilePictureImage} style={{ borderRadius: '50%' }} className='w-32 h-32 border-disabled border-2'/>
      </div>
    </>
  )
}
