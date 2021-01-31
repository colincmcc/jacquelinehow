import React from 'react'
import Link from 'gatsby-link'
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

export default () => (
  <Layout>
  <Container maxWidth={36} p={3}>
    <Helmet title={`Happy birthday, Jacqueline!`} />
    <Card.a bg="white" p={4} mx={[-3, -4]}>
      <Heading.h1 color="primary" f={4} m={0} caps>
        Instructions
      </Heading.h1>
      <br/>
      <Heading.h3>
        What is this?
      </Heading.h3>
      <br/>
      January 30 is
      Jacqueline’s birthday. I’ve created a special website for her! If you’d like to write her a birthday card, keep reading.
      <br/><br/>
      <form name="birthday" method="POST" data-netlify="true">
      <p>
        <label>Your Name: <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
      <br/>
    </Card.a>
  </Container>
  </Layout>
)
