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

Card.a = Card.withComponent('article')

export default () => (
  <Container maxWidth={36} p={3}>
    <Helmet title={`Happy birthday, Jacqueline!`} />
    <Card.a bg="white" p={4} mx={[-3, -4]}>
    <iframe src="https://onedrive.live.com/embed?cid=EFAB372FE2443F7C&amp;resid=EFAB372FE2443F7C%213848&amp;authkey=AERJV-1kbkHCatQ&amp;em=2&amp;wdAr=1.7777777777777777" width="1186px" height="691px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
    </Card.a>
  </Container>
)
