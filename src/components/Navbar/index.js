// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const lightWebsiteLogoUrl =
  'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
const darkWebsiteLogoUrl =
  'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'

const lightThemeUrl =
  'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
const darkThemeUrl =
  'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const navbarClassName = isDarkTheme
        ? 'navbar-container navbar-dark'
        : 'navbar-container navbar-light'
      const navLinkClassName = isDarkTheme
        ? 'nav-link nav-link-dark'
        : 'nav-link nav-link-light'

      const onToggleTheme = () => {
        toggleTheme()
      }

      return (
        <nav className={navbarClassName}>
          <img
            src={isDarkTheme ? darkWebsiteLogoUrl : lightWebsiteLogoUrl}
            alt="website logo"
            className="website-logo"
          />

          <ul className="list-container">
            <li className="list-item">
              <Link to="/" className={navLinkClassName}>
                Home
              </Link>
            </li>
            <li className="list-item">
              <Link to="/about" className={navLinkClassName}>
                About
              </Link>
            </li>
          </ul>

          <button
            type="button"
            className="theme-button"
            onClick={onToggleTheme}
            data-testid="theme"
          >
            <img
              src={isDarkTheme ? darkThemeUrl : lightThemeUrl}
              className="theme-logo"
              alt="theme"
            />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
