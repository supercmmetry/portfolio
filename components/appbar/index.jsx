import SocialButton from '../social-button'

export default function AppBar () {
  return (
    <>
      <div className='w-full h-min flex flex-row'>
        <div className='justify-start'>
          <span className='font-workSans font-semibold text-palleteOrange'> supercmmetry </span>
        </div>
        <div className='flex justify-end space-between w-full'>
          <SocialButton type='github' className='m-2' />
          <SocialButton type='telegram' className='m-2' />
          <SocialButton type='linkedin' className='m-2' />
          <SocialButton type='mail' className='m-2' />
        </div>
      </div>
    </>
  )
}
