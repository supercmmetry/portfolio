import { ReactComponent as GithubSVG } from '../../assets/svg/github.svg'
import { ReactComponent as LinkedInSVG } from '../../assets/svg/linkedin.svg'
import { ReactComponent as MailSVG } from '../../assets/svg/mail.svg'
import { ReactComponent as TelegramSVG } from '../../assets/svg/telegram.svg'
import { ReactComponent as ContactSVG } from '../../assets/svg/contact-book.svg'
import { execActionFromType } from '../../utils/actions'

export default function SocialButton (props) {
  const svgStyle = 'w-9 h-9 fill-foreground ' + (props.raw ? '' : 'hover:fill-hover ') + props.className
  const typeMap = {
    github: <GithubSVG className={svgStyle} />,
    mail: <MailSVG className={svgStyle} />,
    telegram: <TelegramSVG className={svgStyle} />,
    linkedin: <LinkedInSVG className={svgStyle} />,
    contact: <ContactSVG className={svgStyle} />
  }

  const handleOnClick = () => {
    execActionFromType(props.type)
  }

  if (props.raw) {
    return (
      <div>
        {typeMap[props.type]}
      </div>
    )
  }

  return (
    <>
      <button className='focus:outline-none' onClick={handleOnClick}>
        {typeMap[props.type]}
      </button>
    </>
  )
}
