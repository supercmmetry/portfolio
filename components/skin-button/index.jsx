export default function SkinButton (props) {
  return (
    <>
      <div className={props.className}>
        <button className='focus:outline-none rounded-md bg-skin p-3 smooth-transition hover:bg-skinHover text-hover hover:text-foreground' onClick={props.onClick}>
          <span className='text-1xl text-semibold font-workSans'> {props.children} </span>
        </button>
      </div>
    </>
  )
}