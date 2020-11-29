import StyledText from '../styled-text'

export default function SkillsComponent (props) {
  return (
    <div className={props.className}>
      <div className='p-5 flex flex-col'>
        <span className='font-workSans font-semibold text-hover text-3xl sm:text-5xl'> I'm comfortable writing </span>
        <ul className='ul-custom text-foreground ml-3'>
          <li>
            <StyledText> C/C++ & Rust </StyledText>
          </li>
          <li>
            <StyledText> C# & VB.Net </StyledText>
          </li>
          <li>
            <StyledText> Go </StyledText>
          </li>
          <li>
            <StyledText> Python </StyledText>
          </li>
          <li>
            <StyledText> Kotlin & Java </StyledText>
          </li>
        </ul>
      </div>
    </div>
  )
}
