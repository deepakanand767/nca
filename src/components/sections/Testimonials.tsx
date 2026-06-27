"use client";

import {
  Box,
  Container,
  Flex,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaQuoteLeft, FaStar } from "react-icons/fa6";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { CountUp } from "@/components/common/CountUp";
import { achievements } from "@/data/achievements";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <Box as="section" id="testimonials" py={{ base: 16, md: 24 }} bg="gray.50">
      <Container maxW="7xl" px={{ base: 4, md: 6 }}>
        {/* Achievements band */}
        <Reveal>
          <Box
            rounded="3xl"
            p={{ base: 8, md: 12 }}
            position="relative"
            overflow="hidden"
            bgGradient="to-br"
            gradientFrom="brand.700"
            gradientVia="brand.800"
            gradientTo="brand.900"
            boxShadow="0 24px 60px rgba(27,94,32,0.3)"
          >
            <Box
              position="absolute"
              inset="0"
              backgroundImage="radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)"
              backgroundSize="24px 24px"
            />
            <SimpleGrid columns={{ base: 2, lg: 4 }} gap={{ base: 8, md: 6 }} position="relative" zIndex={1}>
              {achievements.map((stat) => (
                <Stack key={stat.label} align="center" textAlign="center" gap={2}>
                  <Flex
                    w="56px"
                    h="56px"
                    rounded="2xl"
                    align="center"
                    justify="center"
                    bg="whiteAlpha.200"
                    color="gold.400"
                    mb={1}
                  >
                    <Icon as={stat.icon} boxSize={6} />
                  </Flex>
                  <HStack gap={0} align="baseline" justify="center">
                    <CountUp
                      end={stat.value}
                      suffix={stat.suffix}
                      fontWeight="900"
                      fontSize={{ base: "3xl", md: "5xl" }}
                      color="white"
                      lineHeight="1"
                    />
                  </HStack>
                  <Text fontSize={{ base: "sm", md: "md" }} color="whiteAlpha.800" fontWeight="600">
                    {stat.label}
                  </Text>
                </Stack>
              ))}
            </SimpleGrid>
          </Box>
        </Reveal>

        {/* Testimonials */}
        <Box mt={{ base: 16, md: 24 }}>
          <SectionHeading
            eyebrow="Testimonials"
            title="Loved by Players & Parents"
            subtitle="Don't just take our word for it — here's what the NCA family has to say."
          />

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 5, md: 6 }} mt={{ base: 12, md: 16 }}>
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1} h="full">
                <Stack
                  h="full"
                  gap={5}
                  p={8}
                  rounded="2xl"
                  bg="white"
                  borderWidth="1px"
                  borderColor="gray.100"
                  boxShadow="0 8px 30px rgba(0,0,0,0.05)"
                  position="relative"
                >
                  <Icon as={FaQuoteLeft} boxSize={8} color="gold.200" />
                  <Text fontSize="md" color="gray.700" lineHeight="1.8" flex="1">
                    {t.quote}
                  </Text>
                  <HStack gap={1}>
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Icon key={s} as={FaStar} boxSize={4} color="gold.400" />
                    ))}
                  </HStack>
                  <HStack gap={3} pt={2} borderTopWidth="1px" borderColor="gray.100">
                    <Flex
                      w="48px"
                      h="48px"
                      rounded="full"
                      align="center"
                      justify="center"
                      bgGradient="to-br"
                      gradientFrom="brand.600"
                      gradientTo="brand.800"
                      mt={3}
                    >
                      <Text fontWeight="800" color="white" fontSize="sm">
                        {t.initials}
                      </Text>
                    </Flex>
                    <Box mt={3}>
                      <Text fontWeight="800" color="brand.800" fontSize="sm">
                        {t.name}
                      </Text>
                      <Text fontSize="xs" color="gray.500">
                        {t.role}
                      </Text>
                    </Box>
                  </HStack>
                </Stack>
              </Reveal>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}
