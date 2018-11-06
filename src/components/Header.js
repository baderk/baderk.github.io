import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>

        <div className="logo">
            <span className="icon fa-server"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Bader Kanawati</h1>
                <p>Passionate about creating content, whether it's through coding or telling stories with photography. </p>
            {/*A SOFTWARE DEVELOPER THAT ENJOYS THE OUTDOORS AND TAKING PHOTOS */}
            {/*fa-coffee or fa-code options for the logo above*/}
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('projects')}}>Projects</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('skills')}}>Skills</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('side-hustle')}}>Side Hustle</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
