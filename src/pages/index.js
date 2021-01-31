import React from 'react'
import {Link, graphql} from 'gatsby'
import Helmet from 'react-helmet'
import {
  Container,
  Box,
  Card,
  Heading,
  Text,
  LargeButton
} from '@hackclub/design-system'
import Body from '../components/Body'
import Cards from '../components/Cards'
import Layout from '../components/Layout'

Card.a = Card

export default ({ data: { allMarkdownRemark: { edges } } }) => (
  <Layout>
  <Box.main align="center">
    <Helmet title={`Happy birthday, Jacqueline!`} />
    <LargeButton
      inverted
      href="/instructions"
      mb={4}
    >
      Leave a Card
    </LargeButton>
    <Cards align="left">
      {edges.map(({ node: { excerpt, frontmatter: { author } } }) => (
        <Card p={4} bg="white"  key={author}>
          <Heading.h3 f={5} mb={1} color="primary">
            <Link to={`/${author}`}>{author}</Link>
          </Heading.h3>
          <Body f={1} dangerouslySetInnerHTML={{ __html: excerpt }} />
        </Card>
      ))}
    </Cards>
  </Box.main>
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___author], order: ASC }
      limit: 1024
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            author
          }
        }
      }
    }
  }
`
