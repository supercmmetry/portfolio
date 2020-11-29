import StyledText from '../styled-text'

export default function OtherSkillsComponent (props) {
  return (
    <div className={props.className}>
      <div className='p-5 flex flex-col'>
        <span className='font-workSans font-semibold text-hover text-3xl sm:text-5xl'> Some other skills </span>
        <ul className='ul-custom text-foreground ml-3'>
          <li>
            <StyledText> I'm experienced in </StyledText>
            <StyledText highlight> Tensorflow </StyledText>
          </li>
          <li>
            <StyledText> I'm skilled in  </StyledText>
            <StyledText highlight> Linux </StyledText>
            <StyledText> administration and </StyledText>
            <StyledText> scripting </StyledText>
          </li>
          <li>
            <StyledText> I can handle DevOps in most cloud platforms</StyledText>
          </li>
          <li>
            <StyledText> I'm familiar with writing GPGPU code in </StyledText>
            <StyledText highlight> CUDA </StyledText>
          </li>
        </ul>
      </div>
    </div>
  )
}
