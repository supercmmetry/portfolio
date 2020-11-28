export default function StyledText (props) {
  if (props.highlight) {
    return (
      <span className={'font-workSans font-medium text-hover text-lg sm:text-4xl text-center ' + props.className}> {props.children} </span>
    )
  }

  return (
    <span className={'font-workSans font-medium text-foreground text-lg sm:text-4xl text-center ' + props.className}> {props.children} </span>
  )
}
