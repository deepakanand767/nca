"use client";

import {
  Box,
  Container,
  Flex,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { GiCricketBat } from "react-icons/gi";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";
import { navLinks, siteConfig } from "@/config/site";

const socialLinks = [
  { icon: FaInstagram, href: siteConfig.socials.instagram, label: "Instagram" },
  { icon: FaFacebookF, href: siteConfig.socials.facebook, label: "Facebook" },
  { icon: FaYoutube, href: siteConfig.socials.youtube, label: "YouTube" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box as="footer" bg="brand.950" color="whiteAlpha.800">
      <Container maxW="7xl" px={{ base: 4, md: 6 }} py={{ base: 12, md: 16 }}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={{ base: 10, md: 8 }}>
          {/* Brand */}
          <Stack gap={4} maxW="sm">
            <HStack gap={3}>
              <Flex
                w="44px"
                h="44px"
                borderRadius="xl"
                bgGradient="to-br"
                gradientFrom="brand.500"
                gradientTo="brand.700"
                align="center"
                justify="center"
              >
                <Icon as={GiCricketBat} boxSize={6} color="gold.400" />
              </Flex>
              <Box lineHeight="1.1">
                <Text fontWeight="900" fontSize="xl" color="white">
                  NCA
                </Text>
                <Text fontSize="2xs" letterSpacing="0.08em" textTransform="uppercase">
                  Nangal Cricket Academy
                </Text>
              </Box>
            </HStack>
            <Text fontSize="sm" lineHeight="1.7">
              Building the next generation of cricketers with expert coaching, modern
              facilities and a winning mindset.
            </Text>
            <HStack gap={3} pt={1}>
              {socialLinks.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  w="38px"
                  h="38px"
                  rounded="full"
                  bg="whiteAlpha.100"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  transition="all 0.2s ease"
                  _hover={{ bg: "gold.500", color: "brand.900" }}
                >
                  <Icon as={s.icon} boxSize={4} />
                </Link>
              ))}
            </HStack>
          </Stack>

          {/* Quick links */}
          <Stack gap={3}>
            <Text fontWeight="800" color="white" textTransform="uppercase" letterSpacing="0.1em" fontSize="sm">
              Quick Links
            </Text>
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                fontSize="sm"
                color="whiteAlpha.800"
                _hover={{ color: "gold.400", textDecoration: "none" }}
              >
                {item.label}
              </Link>
            ))}
          </Stack>

          {/* Contact */}
          <Stack gap={3}>
            <Text fontWeight="800" color="white" textTransform="uppercase" letterSpacing="0.1em" fontSize="sm">
              Get in Touch
            </Text>
            <HStack gap={3} align="flex-start">
              <Icon as={FaLocationDot} boxSize={4} color="gold.400" mt={1} />
              <Text fontSize="sm">{siteConfig.address}</Text>
            </HStack>
            <HStack gap={3} align="flex-start">
              <Icon as={FaPhone} boxSize={4} color="gold.400" mt={1} />
              <Link href={`tel:${siteConfig.phoneDisplay.replace(/\s/g, "")}`} fontSize="sm" _hover={{ color: "gold.400" }}>
                {siteConfig.phoneDisplay}
              </Link>
            </HStack>
            <HStack gap={3} align="flex-start">
              <Icon as={FaEnvelope} boxSize={4} color="gold.400" mt={1} />
              <Link href={`mailto:${siteConfig.email}`} fontSize="sm" _hover={{ color: "gold.400" }}>
                {siteConfig.email}
              </Link>
            </HStack>
          </Stack>

          {/* Hours */}
          <Stack gap={3}>
            <Text fontWeight="800" color="white" textTransform="uppercase" letterSpacing="0.1em" fontSize="sm">
              Training Hours
            </Text>
            <Text fontSize="sm" lineHeight="1.7">
              {siteConfig.hours}
            </Text>
            <Text fontSize="sm" color="gold.400" fontWeight="600">
              Sunday: By appointment
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box borderTop="1px solid" borderColor="whiteAlpha.200">
        <Container maxW="7xl" px={{ base: 4, md: 6 }} py={5}>
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            gap={2}
            textAlign="center"
          >
            <Text fontSize="xs">
              © {year} {siteConfig.fullName}. All rights reserved.
            </Text>
            <Text fontSize="xs">Made with 🏏 in Nangal, Punjab</Text>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
