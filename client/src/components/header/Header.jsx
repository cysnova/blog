import './header.css'
import hero from '../../assets/hero.jpeg'

const Header = () => {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img className='headerImg'src={hero} alt="hot air ballons in the sky" />
    </div>
  )
}

export default Header