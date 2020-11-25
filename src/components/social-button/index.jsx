import GithubSVG from '../../assets/github.svg'
import LinkedInSVG from '../../assets/linkedin.svg'
import MailSVG from '../../assets/mail.svg'
import TelegramSVG from '../../assets/telegram.svg'

export default function SocialButton (props) {
  const svgStyle = 'w-9 h-9 fill-gray hover:fill-orange'
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
