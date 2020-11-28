export default function SkillsComponent (props) {
  return (
    <div className={props.className}>
      <div className='p-5 flex flex-col'>
        <span className='font-workSans font-semibold text-hover text-3xl sm:text-5xl'> I'm comfortable writing </span>
        <ul className='ul-large text-foreground ml-3'>
          <li>
            <span className='font-workSans font-regular text-foreground text-2xl sm:text-4xl text-center'> C/C++ & Rust </span>
          </li>
          <li>
            <span className='font-workSans font-regular text-foreground text-2xl sm:text-4xl text-center'> C# & VB.Net </span>
          </li>
          <li>
            <span className='font-workSans font-regular text-foreground text-2xl sm:text-4xl text-center'> Go </span>
          </li>
          <li>
            <span className='font-workSans font-regular text-foreground text-2xl sm:text-4xl text-center'> Python </span>
          </li>
          <li>
            <span className='font-workSans font-regular text-foreground text-2xl sm:text-4xl text-center'> Kotlin & Java </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
