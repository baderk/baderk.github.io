import React from 'react'
import PropTypes from 'prop-types'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { Link } from 'gatsby'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>


        {/* PROJECTS */}


        <article id="projects" className={`${this.props.article === 'projects' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Web Development Projects</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <h3><a href="https://github.com/baderk/Child-Soldiers-Initiative-Country-Reports"> The Roméo Dallaire Child Soldiers Initiative </a></h3>
          <h3><a href="https://github.com/baderk/redditAPI"> Subreddit Crawler </a></h3>
          {close}
        </article>


        {/* WORK */}


        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work Experience</h2>
          <span className="image main"><img src={pic02} alt="" /></span>

          <h3>Master Merchant Systems&emsp;&emsp;&emsp;&emsp; Sept – Dec 2017</h3>
          <h3>Dalhousie University&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; Jan – Apr 2016</h3>
          <h3>InNetwork Inc.&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp; May - Aug 2016</h3>

          {close}
        </article>


        {/* SKILLS */}


        <article id="skills" className={`${this.props.article === 'skills' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Skills</h2>
          <span className="image main"><img src={pic03} alt="" /></span>

        <div className="row">
          <div className="column">
            <h3> Languages </h3>

              <p>Python<br />
               Java<br />
               C++ <br />
               JavaScript<br />
               HTML<br />
               SQL
               </p>
          </div>
          <div className="column">
            <h3> Tools </h3>

              <p>PyCharm<br />
              Eclipse<br />
              Github       <br />
              GitLab<br />
              Bash<br />
              Bitbucket</p>
          </div>
        </div>
          {close}
        </article>


         {/* SIDE HUSTLE */}


       <article id="side-hustle" className={`${this.props.article === 'side-hustle' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <Link to="/gallery"><h2 className="major">Side Hustle</h2></Link>
          <span className="image main"><img src={pic01} alt="" /></span>

          <h3> Gallery of my photography coming soon! </h3>
          <p> If I'm not sitting infront of my computer screen working on a new project, you'll find me taking
          photos outside and looking for nice boulders to climb! </p>

          {close}
        </article>




        {/* CONTACT */}


        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>

          <p>E-mail: <a href="mailto:baderkanawati@gmail.com">baderkanawati@gmail.com </a></p>


       {/*    <form method="post" action="#" netlify>
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>

          </form>
        */}
          <ul className="icons">
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>

          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
