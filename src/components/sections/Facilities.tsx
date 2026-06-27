"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Reveal } from "@/components/common/Reveal";
import { facilities } from "@/data/facilities";

export function Facilities() {
  return (
    <Box
      as="section"
      id="facilities"
      py={{ base: 16, md: 24 }}
      position="relative"
      overflow="hidden"
      bgGradient="to-br"
      gradientFrom="brand.900"
      gradientTo="brand.950"
    >
      {/* texture */}
      <Box
        position="absolute"
        inset="0"
        backgroundImage="radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)"
        backgroundSize="26px 26px"
        opacity={0.6}
      />

      <Container maxW="7xl" px={{ base: 4, md: 6 }} position="relative" zIndex={1}>
        <Stack gap={4} align="center" textAlign="center" maxW="3xl" mx="auto">
          <Text
            textTransform="uppercase"
            letterSpacing="0.18em"
            fontWeight="700"
            fontSize="sm"
            color="gold.400"
          >
            World-Class Facilities
          </Text>
          <Heading
            as="h2"
            color="white"
            fontWeight="800"
            lineHeight="1.1"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          >
            Everything You Need to Train Seriously
          </Heading>
          <Box w="56px" h="4px" bg="gold.500" borderRadius="full" />
          <Text color="whiteAlpha.800" fontSize={{ base: "md", md: "lg" }} lineHeight="1.7">
            Practice in match-like conditions with infrastructure designed to develop every
            part of your game.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: 5, md: 6 }} mt={{ base: 12, md: 16 }}>
          {facilities.map((facility, i) => (
            <Reveal key={facility.title} delay={(i % 3) * 0.1} h="full">
              <Stack
                h="full"
                gap={4}
                p={7}
                rounded="2xl"
                bg="whiteAlpha.100"
                borderWidth="1px"
                borderColor="whiteAlpha.200"
                backdropFilter="blur(6px)"
                transition="transform 0.25s ease, background 0.25s ease, border-color 0.25s ease"
                _hover={{
                  transform: "translateY(-6px)",
                  bg: "whiteAlpha.200",
                  borderColor: "gold.400",
                }}
              >
                <Flex
                  w="56px"
                  h="56px"
                  rounded="xl"
                  align="center"
                  justify="center"
                  bg="gold.500"
                  color="brand.900"
                >
                  <Icon as={facility.icon} boxSize={6} />
                </Flex>
                <Text fontWeight="800" fontSize="lg" color="white">
                  {facility.title}
                </Text>
                <Text fontSize="sm" color="whiteAlpha.800" lineHeight="1.7">
                  {facility.description}
                </Text>
              </Stack>
            </Reveal>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
