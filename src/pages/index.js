import React, { useState, useEffect } from 'react'
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
import axios from 'axios'

Card.a = Card
const NETLIFY_FUNC =
  '.netlify/functions/fetchWishes'

export default ({ data: { allMarkdownRemark: { edges } } }) => {
  const [wishes, setWishes] = useState([])

  useEffect(() => {
    console.log(wishes)
    const fetchWishes = async () => {
      const response = await axios.get(NETLIFY_FUNC);
      if(response && Array.isArray(response)){
        setWishes(response)
      }
    }
    fetchWishes();
  }, [setWishes])

  return (
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
      {console.log(wishes) && wishes.map((wish) => (
        <Card p={4} bg="white"  key={wish?.author}>
          <Heading.h3 f={5} mb={1} color="primary">
            <Link to={`/${wish?.author}`}>{wish?.author}</Link>
          </Heading.h3>
          <Body f={1} dangerouslySetInnerHTML={{ __html: wish?.message }} />
        </Card>
      ))}
    </Cards>
  </Box.main>
  </Layout>
)}

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
