import ProfilePictureComponent from '../profile-pic'

export default function IntroductionComponent (props) {
  return (
    <div className={props.className}>
      <div className='p-5'>
        <div className='flex flex-col sm:flex-row sm:justify-start'>
          <ProfilePictureComponent className='sm:mr-6 ml-auto mr-auto sm:ml-0 sm:mr-0' />
          <div className='flex flex-col mt-5 ml-auto mr-auto sm:ml-0 sm:mr-0'>
            <span className='font-workSans font-semibold text-foreground text-4xl text-center'> Hi! I'm Vishaal Selvaraj, </span>
            <div className='ml-auto mr-auto sm:ml-0 sm:mr-0 text-center'>
              <span className='font-workSans font-semibold text-foreground text-4xl text-center'> a </span>
              <span className='font-workSans font-semibold text-hover text-4xl text-center'> Full Stack Developer. </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
