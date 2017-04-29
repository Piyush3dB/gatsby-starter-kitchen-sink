import React from 'react'
import 'css/markdown-styles.css'
import Helmet from 'react-helmet'
import { config } from 'config'

module.exports = React.createClass({
  propTypes () {
    return {
      router: React.PropTypes.object,
    }
  },
/*
  getInitialState () {
    MathJax.Hub.Config({
      TeX: {
        equationNumbers: {
          autoNumber: "AMS"
        }
      },
      tex2jax: {
        inlineMath: [ ['$','$'], ['\(', '\)'] ],
        displayMath: [ ['$$','$$'] ],
        processEscapes: true,
      }
    });
  },
*/
  render () {
    const post = this.props.route.page.data
    return (
      <div className="markdown">
        <Helmet
          title={`${config.siteTitle} | ${post.title}`}
        />
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
    )
  },
  componentDidMount() {
      MathJax.Hub.Config({
        TeX: {
          equationNumbers: {
            autoNumber: "AMS"
          }
        },
        tex2jax: {
          inlineMath: [ ['$','$'], ['\(', '\)'] ],
          displayMath: [ ['$$','$$'] ],
          processEscapes: true,
        }
      });
      MathJax.Hub.Queue(['Typeset', MathJax.Hub])
  },
  componentDidUpdate() {
      MathJax.Hub.Config({
        TeX: {
          equationNumbers: {
            autoNumber: "AMS"
          }
        },
        tex2jax: {
          inlineMath: [ ['$','$'], ['\(', '\)'] ],
          displayMath: [ ['$$','$$'] ],
          processEscapes: true,
        }
      });
      MathJax.Hub.Queue(['Typeset', MathJax.Hub])
  }
})
