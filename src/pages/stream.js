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
import * as queryString from "query-string";

Card.a = Card.withComponent('article')

export default ({ location }) => {
  console.log(location); // inspect location for yourself

  const {stream} = queryString.parse(location.search)
  const iframeSource = `https://pus4-broadcast.officeapps.live.com/m/Broadcast.aspx?${stream}`
  return (
    <iframe
    frameBorder="0"
    style={{
      width: "99vw",
      height: "99vh"
    }}


    allowFullScreen="allowFullScreen"
    src={iframeSource}></iframe>

)}
