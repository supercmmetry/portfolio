import ProfilePictureComponent from '../profile-pic'
import SkinButton from '../skin-button'

export default function IntroductionComponent (props) {
  return (
    <div className={props.className}>
      <div className='p-5 w-fit'>
        <div className='flex flex-col'>
          <div className='flex flex-col lg:flex-row sm:justify-start mt-16 sm:mt-0'>
            <ProfilePictureComponent innerStyle='w-36 h-36 sm:block hidden' className='lg:mr-6 ml-auto mr-auto lg:ml-0 lg:mr-0' />
            <div className='flex flex-col mt-5 ml-auto mr-auto lg:ml-0 lg:mr-0'>
              <span className='font-workSans font-semibold text-foreground text-3xl sm:text-5xl text-center'> Hi! I'm Vishaal Selvaraj, </span>
              <div className='ml-auto mr-auto sm:ml-0 sm:mr-0 text-center'>
                <span className='font-workSans font-semibold text-foreground text-3xl sm:text-5xl text-center'> a </span>
                <span className='font-workSans font-semibold text-hover text-3xl sm:text-5xl text-center'> Full Stack Developer. </span>
              </div>
              <div className='mr-auto sm:ml-0 sm:mr-auto text-center sm:mt-6 mt-3'>
                <span className='font-workSans font-semibold text-foreground text-1xl text-center'> The </span>
                <span className='font-workSans font-semibold text-hover text-1xl text-center'> math </span>
                <span className='font-workSans font-semibold text-foreground text-1xl text-center'> and </span>
                <span className='font-workSans font-semibold text-hover text-1xl text-center'> computer </span>
                <span className='font-workSans font-semibold text-foreground text-1xl text-center'> enthusiast. </span>
              </div>
            </div>
          </div>
          <SkinButton className='mt-7 m-auto md:ml-auto md:mr-2' onClick={props.handleNextPage}> Let's get started! </SkinButton>
        </div>
      </div>
    </div>
  )
}
