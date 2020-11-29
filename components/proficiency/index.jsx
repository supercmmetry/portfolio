import StyledText from '../styled-text'

export default function ProficiencyComponent (props) {
  return (
    <div className={props.className}>
      <div className='p-5 flex flex-col'>
        <span className='font-workSans font-semibold text-hover text-3xl sm:text-5xl'> I'm experienced in building </span>
        <ul className='ul-custom text-foreground ml-3'>
          <li>
            <StyledText> RESTful APIs with </StyledText>
            <StyledText highlight> FastAPI, Node.js, Go, Rocket </StyledText>
          </li>
          <li>
            <StyledText> Desktop apps with </StyledText>
            <StyledText highlight> Electron, WPF, Qt </StyledText>
          </li>
          <li>
            <StyledText> Web apps with </StyledText>
            <StyledText highlight> React </StyledText>
          </li>
          <li>
            <StyledText> Cross-platform apps with </StyledText>
            <StyledText highlight> Flutter </StyledText>
          </li>
          <li>
            <StyledText> Native android apps </StyledText>
          </li>
        </ul>
      </div>
    </div>
  )
}
