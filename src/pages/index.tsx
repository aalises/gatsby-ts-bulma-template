import React from 'react'
import { graphql } from "gatsby"
import Img from 'gatsby-image'
import '../styles/index.sass'

const Main = ({data}) => {
  return (
    <>
        <div className="title is-4">Bulma Typescript Gatsby Starter</div>
        <Img fixed={data.file.childImageSharp.fixed}/>
    </>
  )
}

export const ImageQuery = graphql`
  query {
    file(relativePath: { eq: "sample.jpeg" }) {
      childImageSharp {
          fixed(quality: 100, width: 640, height: 627 ) {
            ...GatsbyImageSharpFixed
          }
      }
    }
  }
`

export default Main
