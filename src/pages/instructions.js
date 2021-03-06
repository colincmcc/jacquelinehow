import React from 'react'
import {navigate, Link} from 'gatsby';
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

function encode(data) {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
}

export default () => {
  const handleSubmit = (event) => {
    event.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
        ...name
      })
    }).then(() => navigate("/")).catch(error => alert(error))
  }

  return (
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
      <form name="birthday" method="post" data-netlify="true" onSubmit={handleSubmit}>
      <p>
        <label>Your Name: <input type="text" name="author" /></label>
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
)}
