import React from 'react';
import { Box, Link, Stack } from '@chakra-ui/core';
import { Link as RouteLink } from 'gatsby';

import Container from '../components/container';

const HeaderLink = ({ to, ...props }) => {
  const isActive =
    typeof window !== 'undefined' && window.location.pathname === to;

  return (
    <Link
      as={RouteLink}
      to={to}
      {...props}
      borderBottomWidth={isActive ? '4px' : 'none'}
      borderColor={isActive ? 'primary.400' : 'none'}
      fontSize="lg"
      _hover={{
        textDecoration: 'none',
        borderBottomWidth: '4px',
        borderColor: 'primary.100',
      }}
    />
  );
};

const Header = (...props) => {
  return (
    <Box as="header" zIndex="banner" {...props}>
      <Container py={5}>
        <Stack
          as="nav"
          isInline
          spacing={8}
          align="center"
          justify="center"
          shouldWrapChildren
        >
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/projects">Projects</HeaderLink>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
