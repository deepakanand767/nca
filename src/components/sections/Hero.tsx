"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
  Heading,
} from "@chakra-ui/react";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa6";
import { GiCricketBat } from "react-icons/gi";
import { buildWhatsAppLink, siteConfig } from "@/config/site";

const quickStats = [
  { value: "10+", label: "Years" },
  { value: "500+", label: "Students" },
  { value: "25+", label: "Trophies" },
];

export function Hero() {
  return (
    <Box
      as="section"
      id="home"
      position="relative"
      minH={{ base: "100svh", md: "100vh" }}
      display="flex"
      alignItems="center"
      overflow="hidden"
      bgGradient="to-br"
      gradientFrom="brand.800"
      gradientVia="brand.900"
      gradientTo="brand.950"
    >
      {/* Decorative glows */}
      <Box
        position="absolute"
        top="-120px"
        right="-80px"
        w="420px"
        h="420px"
        bg="brand.500"
        opacity={0.25}
        filter="blur(120px)"
        borderRadius="full"
      />
      <Box
        position="absolute"
        bottom="-140px"
        left="-100px"
        w="460px"
        h="460px"
        bg="gold.500"
        opacity={0.12}
        filter="blur(130px)"
        borderRadius="full"
      />
      {/* Dot grid texture */}
      <Box
        position="absolute"
        inset="0"
        backgroundImage="radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)"
        backgroundSize="24px 24px"
        maskImage="radial-gradient(ellipse at center, black 35%, transparent 80%)"
      />

      <Container maxW="7xl" px={{ base: 4, md: 6 }} position="relative" zIndex={1} py={{ base: 28, md: 24 }}>
        <Stack
          gap={{ base: 6, md: 8 }}
          maxW="3xl"
          animation="fadeInUp 0.8s ease both"
        >
          <HStack
            alignSelf="flex-start"
            gap={2}
            px={4}
            py={2}
            rounded="full"
            bg="whiteAlpha.100"
            borderWidth="1px"
            borderColor="whiteAlpha.300"
          >
            <Icon as={GiCricketBat} color="gold.400" boxSize={4} />
            <Text fontSize="sm" fontWeight="600" color="whiteAlpha.900">
              Nangal&apos;s Premier Cricket Academy
            </Text>
          </HStack>

          <Heading
            as="h1"
            color="white"
            fontWeight="900"
            lineHeight="1.05"
            letterSpacing="-0.02em"
            fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
          >
            Train Like a{" "}
            <Box as="span" color="gold.400">
              Champion
            </Box>{" "}
            at Nangal Cricket Academy
          </Heading>

          <Text
            color="whiteAlpha.800"
            fontSize={{ base: "md", md: "xl" }}
            lineHeight="1.7"
            maxW="2xl"
          >
            Professional coaching for every age and skill level. World-class facilities,
            experienced coaches and real match exposure — right here in Nangal.
          </Text>

          <Flex direction={{ base: "column", sm: "row" }} gap={4} pt={2}>
            <Button
              asChild
              size="xl"
              bg="#25D366"
              color="white"
              fontWeight="700"
              rounded="full"
              px={8}
              _hover={{ bg: "#1ebe5b", transform: "translateY(-2px)" }}
              transition="all 0.2s ease"
            >
              <a
                href={buildWhatsAppLink(
                  `Hi ${siteConfig.fullName}, I'd like to enquire about joining the academy.`
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon as={FaWhatsapp} boxSize={5} />
                Join via WhatsApp
              </a>
            </Button>

            <Button
              asChild
              size="xl"
              variant="outline"
              color="white"
              borderColor="whiteAlpha.400"
              fontWeight="700"
              rounded="full"
              px={8}
              _hover={{ bg: "whiteAlpha.100", borderColor: "gold.400", color: "gold.300" }}
            >
              <a href="#programs">
                Explore Programs
                <Icon as={FaArrowRight} boxSize={4} />
              </a>
            </Button>
          </Flex>

          {/* Quick stats */}
          <HStack gap={{ base: 6, md: 10 }} pt={{ base: 4, md: 6 }} flexWrap="wrap">
            {quickStats.map((s, i) => (
              <HStack key={s.label} gap={{ base: 6, md: 10 }}>
                <Box>
                  <Text fontWeight="900" fontSize={{ base: "2xl", md: "3xl" }} color="white">
                    {s.value}
                  </Text>
                  <Text fontSize="sm" color="whiteAlpha.700">
                    {s.label}
                  </Text>
                </Box>
                {i < quickStats.length - 1 && (
                  <Box h="40px" w="1px" bg="whiteAlpha.300" display={{ base: "none", sm: "block" }} />
                )}
              </HStack>
            ))}
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
}
