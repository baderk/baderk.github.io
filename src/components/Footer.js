import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
    	<ul className="icons">
            <li><a href="https://www.instagram.com/baderkanawati" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="https://www.github.com/baderk" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
