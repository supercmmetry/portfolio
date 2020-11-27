export function execActionFromType (type) {
  const actionMap = {
    github: () => window.location.assign('https://github.com/supercmmetry'),
    mail: () => window.location.assign('mailto:vishaals2000@gmail.com'),
    telegram: () => window.location.assign('https://t.me/supercmmetry'),
    linkedin: () => window.location.assign('https://www.linkedin.com/in/vishaal-selvaraj-081639172')
  }

  const action = actionMap[type]
  if (action !== undefined) {
    action()
  }
}
