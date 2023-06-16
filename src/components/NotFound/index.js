// Write your code here
import ThemeContext from '../../context/ThemeContext'
import './index.css'
import Navbar from '../Navbar'

const NotFound = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const bgColor = isDarkTheme ? 'dark-theme' : 'light-theme'
        const fontColor = isDarkTheme ? '#ffffff' : '#000000'
        return (
          <div className={bgColor}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />
            <h1 color={fontColor}>Lost Your Way!</h1>
            <p color={fontColor}>We cannot seem to find the page</p>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default NotFound
