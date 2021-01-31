import React from 'react'
import Helmet from 'react-helmet'
import {Link, graphql} from 'gatsby'
import { Container, Card, Heading, Text, Box } from '@hackclub/design-system'

import Body from '../components/Body'

Card.a = Card

export default ({ data }) => {
  if (data.markdownRemark) {
    const { frontmatter: { author }, html } = data.markdownRemark
    return (
      <Container maxWidth={36} p={3}>
        <Helmet title={`Happy birthday, Jacqueline!`} />
        <Card bg="white" p={4} mx={[-3, -4]}>
          <Heading.h1 color="primary" f={4} m={0} caps>
            {author}
          </Heading.h1>
          <Body mt={2} dangerouslySetInnerHTML={{ __html: html }} />
        </Card>
      </Container>
    )
  } else {
    return null
  }
}

export const pageQuery = graphql`
  query ByAuthor($author: String!) {
    markdownRemark(frontmatter: { author: { eq: $author } }) {
      html
      frontmatter {
        author
      }
    }
  }
`
