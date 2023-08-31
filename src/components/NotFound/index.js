// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundContainerClassName = isDarkTheme
        ? 'not-found-container dark-not-found-container'
        : 'not-found-container light-not-found-container'
      const notFoundHeadingClassName = isDarkTheme
        ? 'heading dark-heading'
        : 'heading light-heading'
      const notFoundDescriptionClassName = isDarkTheme
        ? 'description dark-description'
        : 'description light-description'

      return (
        <>
          <Navbar />
          <div className={notFoundContainerClassName}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-img"
            />
            <h1 className={notFoundHeadingClassName}>Lost Your Way?</h1>
            <p className={notFoundDescriptionClassName}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
