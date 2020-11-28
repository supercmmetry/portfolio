function RepoComponent (props) {
  const url = 'https://github.com/' + props.username + '/' + props.repo

  const src = `https://github-readme-stats.vercel.app/api/pin/?username=${props.username}&repo=${props.repo}&layout=compact&hide_border=true&title_color=04D9FF&text_color=EEFBFB&bg_color=30,EEFBFB1f,EEFBFB2f`
  return (
    <div className={props.className}>
      <button className='focus:outline-none rounded-md smooth-transition hover:bg-skinHover' onClick={() => window.location.assign(url)}>
        <img src={src} alt='ReadMe Card' />
      </button>
    </div>
  )
}

function GithubComponent (props) {
  return (
    <div className={props.className}>
      <button className='focus:outline-none rounded-md smooth-transition hover:bg-skinHover' onClick={() => window.location.assign('https://github.com/supercmmetry')}>
        <img src={props.url} alt='' />
      </button>
    </div>
  )
}

export default function GithubStats (props) {
  return (
    <div className={props.className}>
      <GithubComponent url='https://github-readme-stats.vercel.app/api?username=supercmmetry&hide_border=true&show_icons=true&count_private=true&title_color=04D9FF&text_color=EEFBFB&bg_color=30,EEFBFB1f,EEFBFB2f' />
      <GithubComponent className='mt-2' url='https://github-readme-stats.vercel.app/api/top-langs/?username=supercmmetry&hide_border=true&layout=compact&title_color=04D9FF&text_color=EEFBFB&bg_color=30,EEFBFB1f,EEFBFB2f' />

      <button className='mt-3 focus:outline-none rounded-md bg-skin p-2 smooth-transition hover:bg-skinHover text-hover hover:text-foreground w-min' onClick={() => window.location.assign('https://github.com/supercmmetry')}>
        <span className='font-workSans font-medium text-hover text-base text-center'> Projects </span>
      </button>

      <div className='flex flex-row mt-2'>
        <RepoComponent username='supercmmetry' repo='lucy' />
        <RepoComponent className='ml-2' username='supercmmetry' repo='rainman' />
      </div>
      <div className='flex flex-row mt-2'>
        <RepoComponent username='Pokemon-Rust' repo='core' />
        <RepoComponent className='ml-2' username='supercmmetry' repo='bitio' />
      </div>
      <div className='flex flex-row mt-2'>
        <RepoComponent username='supercmmetry' repo='portfolio' />
        <RepoComponent className='ml-2' username='hybridzip' repo='hzip-rs' />
      </div>
    </div>
  )
}
