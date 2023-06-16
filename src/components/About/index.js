// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const About = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const bgColor = isDarkTheme ? 'dark-theme' : 'light-theme'
        const fontColor = isDarkTheme ? '#ffffff' : '#000000'

        return (
          <div className={bgColor}>
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
              />
            )}
            <h1 color={fontColor}>About</h1>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default About
