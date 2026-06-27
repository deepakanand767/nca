"use client";

import { Box, Container, Icon, SimpleGrid, Stack, Text, Flex } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { FaUserNinja, FaUsers, FaTrophy } from "react-icons/fa6";
import { GiCricketBat } from "react-icons/gi";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";

interface Highlight {
  icon: IconType;
  title: string;
  text: string;
}

const highlights: Highlight[] = [
  {
    icon: FaUserNinja,
    title: "Expert Coaching",
    text: "Certified coaches with real playing and coaching pedigree who mentor every player personally.",
  },
  {
    icon: FaUsers,
    title: "All Age Groups",
    text: "Structured programs from age 6 to seniors — there's a place for every aspiring cricketer.",
  },
  {
    icon: GiCricketBat,
    title: "Modern Facilities",
    text: "Turf & matting nets, bowling machines and a floodlit ground for serious, year-round practice.",
  },
  {
    icon: FaTrophy,
    title: "Match Exposure",
    text: "Regular matches, tournaments and trial preparation that build real big-game temperament.",
  },
];

export function About() {
  return (
    <Box as="section" id="about" py={{ base: 16, md: 24 }} bg="white">
      <Container maxW="7xl" px={{ base: 4, md: 6 }}>
        <SectionHeading
          eyebrow="About NCA"
          title="More Than Just a Cricket Academy"
          subtitle="Founded with a passion for the game, Nangal Cricket Academy has grown into the region's home of serious cricket. We blend disciplined coaching, modern infrastructure and genuine care to turn enthusiastic beginners into confident, competitive cricketers."
        />

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={{ base: 5, md: 6 }} mt={{ base: 12, md: 16 }}>
          {highlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <Stack
                h="full"
                gap={4}
                p={7}
                rounded="2xl"
                bg="white"
                borderWidth="1px"
                borderColor="gray.100"
                boxShadow="0 8px 30px rgba(0,0,0,0.04)"
                position="relative"
                overflow="hidden"
                transition="transform 0.25s ease, box-shadow 0.25s ease"
                _hover={{
                  transform: "translateY(-6px)",
                  boxShadow: "0 18px 40px rgba(27,94,32,0.12)",
                }}
              >
                <Box position="absolute" top="0" left="0" right="0" h="4px" bg="gold.500" />
                <Flex
                  w="56px"
                  h="56px"
                  rounded="xl"
                  align="center"
                  justify="center"
                  bg="brand.50"
                  color="brand.700"
                >
                  <Icon as={item.icon} boxSize={6} />
                </Flex>
                <Text fontWeight="800" fontSize="lg" color="brand.800">
                  {item.title}
                </Text>
                <Text fontSize="sm" color="gray.600" lineHeight="1.7">
                  {item.text}
                </Text>
              </Stack>
            </Reveal>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
