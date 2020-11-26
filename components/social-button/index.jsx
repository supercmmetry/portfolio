import { ReactComponent as GithubSVG } from '../../assets/svg/github.svg'
import { ReactComponent as LinkedInSVG } from '../../assets/svg/linkedin.svg'
import { ReactComponent as MailSVG } from '../../assets/svg/mail.svg'
import { ReactComponent as TelegramSVG } from '../../assets/svg/telegram.svg'

export default function SocialButton (props) {
  const svgStyle = 'w-9 h-9 fill-gray hover:fill-orange ' + props.className
  const typeMap = {
    github: <GithubSVG className={svgStyle} />,
    mail: <MailSVG className={svgStyle} />,
    telegram: <TelegramSVG className={svgStyle} />,
    linkedin: <LinkedInSVG className={svgStyle} />
  }

  const actionMap = {
    github: () => window.location.assign('https://github.com/supercmmetry'),
    mail: () => window.location.assign('mailto:vishaals2000@gmail.com'),
    telegram: () => window.location.assign('https://t.me/supercmmetry'),
    linkedin: () => window.location.assign('https://www.linkedin.com/in/vishaal-selvaraj-081639172')
  }

  const handleOnClick = () => {
    const func = actionMap[props.type]

    if (func !== undefined) {
      func()
    }
  }

  return (
    <>
      <button className='focus:outline-none' onClick={handleOnClick}>
        {typeMap[props.type]}
      </button>
    </>
  )
}
