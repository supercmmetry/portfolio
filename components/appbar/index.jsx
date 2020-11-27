import SocialButton from '../social-button'

export default function AppBar () {
  return (
    <>
      <div className='w-full h-min flex flex-row bg-opacity-20 object-top p-4'>
        <div className='flex flex-row justify-start m-2'>
          <span className='font-workSans font-semibold text-foreground text-3xl'> super </span>
          <span className='font-workSans font-semibold text-hover text-3xl'> c </span>
          <span className='font-workSans font-semibold text-foreground text-3xl'> mmetry </span>
        </div>
        <div className='justify-end space-between w-full mr-2 hidden sm:flex'>
          <SocialButton type='github' className='m-2' />
          <SocialButton type='telegram' className='m-2' />
          <SocialButton type='linkedin' className='m-2' />
          <SocialButton type='mail' className='m-2' />
        </div>
      </div>
    </>
  )
}
