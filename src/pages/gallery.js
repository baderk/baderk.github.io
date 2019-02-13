import React from 'react'
import Layout from '../components/layout'

import PropTypes from 'prop-types'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import { graphql } from 'gatsby'
import zigzag from '../images/zigzag.png'
import Lightbox from '../components/Lightbox'

class GalleryPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading'
    }
  }

// const GalleryPage = ({ data }) => (
//   <Layout>
//   <h1> Gallery </h1>
//
//   Here is a gallery
//   <Lightbox images={data.allImageSharp.edges} />
//   </Layout>
// )
  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }


  // GalleryPage.propTypes = {
  //   data: PropTypes.object.isRequired,
  // }
  //
  // export default GalleryPage
  //
  //
  //
  // export const pageQuery = graphql`
  // query GalleryQuery {
  //   site {
  //     siteMetadata {
  //       title
  //     }
  //   }
  //   allImageSharp {
  //     edges {
  //       node {
  //         sizes(maxWidth: 1800) {
  //           ...GatsbyImageSharpSizes
  //         }
  //       }
  //     }
  //   }
  // }
// `
  render() {
    return (
      <Layout location={this.props.location}>
        <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
          <div id="wrapper">
           

            <Footer timeout={this.state.timeout} />
          </div>
          <div id="bg"></div>
        </div>
      </Layout>
    )
  }
}

export default GalleryPage
