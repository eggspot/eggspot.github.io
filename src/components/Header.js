import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PropTypes from "prop-types"

import { rhythm } from '../utils/typography'

const Wrapper = styled.section`
  padding: ${rhythm(6)} ${rhythm(4)};
  background: #f1f1f1;
  text-align: center;
  font-size: ${rhythm(1.2)}
`;

const Title = styled.h1`
  color: #000000;
  margin-top: 0;
  font-size: ${rhythm(2)}
`

const StyledLink = styled(Link)`
  font-size: 13px;
  margin: 0 15px;
  border-bottom: 1px dashed #007acc;
  box-shadow: none;
`

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Title>{siteTitle}</Title>
    <div>
      <p>Let us turn your ECommerce store to a profit generator</p>
      <StyledLink to='#'>Facebook</StyledLink>
      <StyledLink to='#'>Twitter</StyledLink>
      <StyledLink to='#'>Linkedin</StyledLink>
      <StyledLink to='#'>Github</StyledLink>
    </div>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
