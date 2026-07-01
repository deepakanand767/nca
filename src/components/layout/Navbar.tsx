"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GiCricketBat } from "react-icons/gi";
import { FaBars, FaWhatsapp, FaXmark } from "react-icons/fa6";
import { buildWhatsAppLink, navLinks, siteConfig } from "@/config/site";

export function Navbar({ forceSolid = false }: { forceSolid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = forceSolid || scrolled || open;
  const linkColor = solid ? "gray.700" : "whiteAlpha.900";

  return (
    <Box
      as="header"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex={900}
      transition="background 0.3s ease, box-shadow 0.3s ease"
      bg={solid ? "white" : "transparent"}
      boxShadow={solid ? "0 2px 18px rgba(0,0,0,0.08)" : "none"}
    >
      <Container maxW="7xl" px={{ base: 4, md: 6 }}>
        <Flex h={{ base: "64px", md: "76px" }} align="center" justify="space-between">
          {/* Logo */}
          <Link href="/" _hover={{ textDecoration: "none" }} onClick={() => setOpen(false)}>
            <HStack gap={3}>
              <Flex
                w="44px"
                h="44px"
                borderRadius="xl"
                bgGradient="to-br"
                gradientFrom="brand.600"
                gradientTo="brand.800"
                align="center"
                justify="center"
                boxShadow="0 6px 16px rgba(27,94,32,0.35)"
              >
                <Icon as={GiCricketBat} boxSize={6} color="gold.400" />
              </Flex>
              <Box lineHeight="1.1">
                <Text fontWeight="900" fontSize="xl" color={solid ? "brand.800" : "white"}>
                  NCA
                </Text>
                <Text
                  fontSize="2xs"
                  letterSpacing="0.08em"
                  textTransform="uppercase"
                  color={solid ? "gray.500" : "whiteAlpha.800"}
                >
                  Nangal Cricket Academy
                </Text>
              </Box>
            </HStack>
          </Link>

          {/* Desktop nav */}
          <HStack gap={7} display={{ base: "none", lg: "flex" }}>
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                fontSize="sm"
                fontWeight="600"
                color={linkColor}
                _hover={{ color: "gold.500", textDecoration: "none" }}
                transition="color 0.2s ease"
              >
                {item.label}
              </Link>
            ))}
          </HStack>

          <HStack gap={2}>
            <Button
              asChild
              display={{ base: "none", sm: "inline-flex" }}
              colorPalette="green"
              bg="brand.700"
              color="white"
              fontWeight="700"
              rounded="full"
              _hover={{ bg: "brand.800" }}
            >
              <a
                href={buildWhatsAppLink(
                  `Hi ${siteConfig.fullName}, I'd like to join the academy.`
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon as={FaWhatsapp} boxSize={4} />
                Join Now
              </a>
            </Button>

            {/* Mobile toggle */}
            <IconButton
              aria-label="Toggle menu"
              variant="ghost"
              display={{ base: "inline-flex", lg: "none" }}
              color={solid ? "brand.800" : "white"}
              onClick={() => setOpen((v) => !v)}
            >
              <Icon as={open ? FaXmark : FaBars} boxSize={5} />
            </IconButton>
          </HStack>
        </Flex>
      </Container>

      {/* Mobile menu panel */}
      <Box
        display={{ base: "block", lg: "none" }}
        overflow="hidden"
        maxH={open ? "440px" : "0"}
        opacity={open ? 1 : 0}
        transition="max-height 0.35s ease, opacity 0.25s ease"
        bg="white"
        borderTop={open ? "1px solid" : "none"}
        borderColor="gray.100"
      >
        <Container maxW="7xl" px={4} py={open ? 4 : 0}>
          <Stack gap={1}>
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                py={3}
                px={3}
                rounded="lg"
                fontWeight="600"
                color="gray.700"
                _hover={{ bg: "brand.50", color: "brand.700", textDecoration: "none" }}
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              mt={2}
              bg="brand.700"
              color="white"
              rounded="full"
              _hover={{ bg: "brand.800" }}
            >
              <a
                href={buildWhatsAppLink(
                  `Hi ${siteConfig.fullName}, I'd like to join the academy.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                <Icon as={FaWhatsapp} boxSize={4} />
                Join on WhatsApp
              </a>
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
