import StyledText from '../styled-text'
import SkinButton from '../skin-button'

export default function ProficiencyComponent(props) {
  return (
    <div className={props.className}>
      <div className='p-5 flex flex-col'>
        <span className='font-workSans font-semibold text-hover text-3xl sm:text-5xl'> I'm experienced with building </span>
        <ul className='ul-small sm:ul-large text-foreground ml-3'>
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
            <StyledText highlight> React and Vue </StyledText>
          </li>
          <li>
            <StyledText> Cross-platform apps with </StyledText>
            <StyledText highlight> Flutter </StyledText>
          </li>
          <li>
            <StyledText> Native apps with </StyledText>
            <StyledText highlight> Kotlin </StyledText>
          </li>
        </ul>
        <div className='hidden sm:flex mt-10 flex-row w-full'>
          <SkinButton className='mr-auto' onClick={() => props.setCurrentPage(props.page - 1)}> {'< Back'} </SkinButton>
          <SkinButton onClick={() => props.setCurrentPage(props.page + 1)}> {'Next >'} </SkinButton>
        </div>
      </div>
    </div>
  )
}
