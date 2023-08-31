// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const darkHomeImgUrl =
  'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
const lightHomeImgUrl =
  'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeContainerClassName = isDarkTheme
        ? 'home-container dark-home-container'
        : 'home-container light-home-container'
      const homeHeadingClassName = isDarkTheme
        ? 'heading dark-heading'
        : 'heading light-heading'

      return (
        <>
          <Navbar />
          <div className={homeContainerClassName}>
            <img
              src={isDarkTheme ? darkHomeImgUrl : lightHomeImgUrl}
              alt="home"
              className="home-img"
            />
            <h1 className={homeHeadingClassName}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
