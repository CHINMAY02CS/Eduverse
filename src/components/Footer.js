import React from 'react'
import './assets.css'

const Footer = () => {
  return (
    <div class = "footer-container">
        <div className="contact-me">
      <h3>Get In Touch</h3>
      <h4>Feel free to get in touch. Cheers!</h4>

      <div className="descme">
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src="https://static.vecteezy.com/system/resources/previews/008/506/403/original/telephone-contact-icon-in-black-circle-shape-free-png.png" alt="icon" height="100px" width="100px" className="dme" />
        </a>
        <div>
          <p className="mcaption">
            <strong>Contact Us</strong>
            <br />(+91 9340935047)
          </p>
        </div>
      </div>

      <div className="descme">
        <a href="mailto:vedanshu20101@iiitnr.edu.in">
          <img src="https://chinmay02cs.github.io/Portfolio/images/mail.png" alt="icon" height="100px" width="100px" className="dme" />
        </a>
        <div>
          <p className="mcaption">
            <strong>Mail</strong>
            <br />{'pallavi20100@iiitnr.edu.in'}
          </p>
        </div>
      </div>

      <footer className="footer">
        <a className="footerlinks" href="https://www.linkedin.com/in/chinmay-singh/" target="_blank" rel="noopener noreferrer">
          <strong>LinkedIn</strong>
        </a>
        <a className="footerlinks" href="https://github.com/CHINMAY02CS" target="_blank" rel="noopener noreferrer">
          <strong>Github</strong>
        </a>
        <br/>
        <p style={{ color: 'whitesmoke' }}>© Pallavi Sahu, Vedanshu Dewangan, Chinmay Singh.</p>
      </footer>
    </div>
    </div>
    
  )
}

export default Footer
