import { Box, Link, HStack, Flex } from '@chakra-ui/react'
import NextLink from 'next/link'

import Container from './Container'
import { useRouter } from 'next/router'

const HeaderLink = ({ href, children, ...remaining }) => {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <NextLink href={href} passHref>
      <Link
        {...remaining}
        borderBottomWidth={isActive ? '4px' : 'none'}
        borderColor={isActive ? 'primary.500' : 'none'}
        fontSize="lg"
        _hover={{
          textDecoration: 'none',
          borderBottomWidth: '4px',
          borderColor: !isActive ? 'primary.100' : undefined,
        }}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Header = () => {
  return (
    <Box as="header" zIndex="banner">
      <Container py={5}>
        <Flex width="full" justifyContent={{ base: 'center', md: 'flex-end' }}>
          <HStack
            as="nav"
            spacing={8}
            align="center"
            justify="center"
            shouldWrapChildren
          >
            <HeaderLink href="/">Home</HeaderLink>
            <HeaderLink href="/projects">Projects</HeaderLink>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
