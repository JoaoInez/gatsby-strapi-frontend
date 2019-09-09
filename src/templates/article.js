import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Reactmarkdown from "react-markdown"
import Layout from "../components/layout"

const ArticleTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiArticle.title}</h1>
    <p>
      by{" "}
      <Link to={`/authors/User_${data.strapiArticle.author.id}`}>
        {data.strapiArticle.author.username}
      </Link>
    </p>
    <Img fluid={data.strapiArticle.image.childImageSharp.fluid} />
    <Reactmarkdown source={data.strapiArticle.content} />
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: { eq: $id }) {
      title
      content
      image {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      author {
        id
        username
      }
    }
  }
`
