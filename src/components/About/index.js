// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const darkAboutImgUrl =
  'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
const lightAboutImgUrl =
  'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutContainerClassName = isDarkTheme
        ? 'about-container dark-about-container'
        : 'about-container light-about-container'
      const aboutHeadingClassName = isDarkTheme
        ? 'heading dark-heading'
        : 'heading light-heading'

      return (
        <>
          <Navbar />
          <div className={aboutContainerClassName}>
            <img
              src={isDarkTheme ? lightAboutImgUrl : darkAboutImgUrl}
              alt="about"
              className="about-img"
            />
            <h1 className={aboutHeadingClassName}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
