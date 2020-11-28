export default function StyledText (props) {
  if (props.highlight) {
    return (
      <span className={'font-workSans font-regular text-hover text-base sm:text-4xl text-center ' + props.className}> {props.children} </span>
    )
  }

  return (
    <span className={'font-workSans font-regular text-foreground text-base sm:text-4xl text-center ' + props.className}> {props.children} </span>
  )
}