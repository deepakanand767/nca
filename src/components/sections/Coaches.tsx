"use client";

import {
  Box,
  Container,
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaMedal } from "react-icons/fa6";
import { GiCricketBat } from "react-icons/gi";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { coaches } from "@/data/coaches";

export function Coaches() {
  return (
    <Box as="section" id="coaches" py={{ base: 16, md: 24 }} bg="white">
      <Container maxW="7xl" px={{ base: 4, md: 6 }}>
        <SectionHeading
          eyebrow="Meet The Team"
          title="Coaches Who Build Champions"
          subtitle="Our coaching staff brings decades of combined experience, blending technical expertise with the patience and passion to bring out the best in every player."
        />

        <Flex wrap="wrap" justify="center" gap={6} mt={{ base: 12, md: 16 }}>
          {coaches.map((coach, i) => (
            <Reveal key={coach.name} delay={i * 0.1} h="full" w={{ base: "full", sm: "300px" }}>
              <Stack
                h="full"
                gap={0}
                rounded="2xl"
                overflow="hidden"
                bg="white"
                borderWidth="1px"
                borderColor="gray.100"
                boxShadow="0 8px 30px rgba(0,0,0,0.05)"
                transition="transform 0.25s ease, box-shadow 0.25s ease"
                _hover={{ transform: "translateY(-6px)", boxShadow: "0 18px 44px rgba(27,94,32,0.14)" }}
              >
                {/* Avatar placeholder */}
                <Flex
                  h="180px"
                  align="center"
                  justify="center"
                  position="relative"
                  bgGradient="to-br"
                  gradientFrom={coach.from}
                  gradientTo={coach.to}
                  overflow="hidden"
                >
                  <Icon
                    as={GiCricketBat}
                    boxSize="120px"
                    color="whiteAlpha.200"
                    position="absolute"
                    bottom="-20px"
                    right="-12px"
                    transform="rotate(-20deg)"
                  />
                  <Flex
                    w="80px"
                    h="80px"
                    rounded="full"
                    bg="whiteAlpha.300"
                    borderWidth="2px"
                    borderColor="whiteAlpha.500"
                    align="center"
                    justify="center"
                    backdropFilter="blur(4px)"
                  >
                    <Text fontWeight="900" fontSize="2xl" color="white">
                      {coach.initials}
                    </Text>
                  </Flex>
                </Flex>

                <Stack gap={3} p={6}>
                  <Box>
                    <Text fontWeight="800" fontSize="lg" color="brand.800">
                      {coach.name}
                    </Text>
                    <Text fontSize="sm" fontWeight="700" color="gold.600">
                      {coach.role}
                    </Text>
                  </Box>
                  <HStack gap={2} color="gray.600">
                    <Icon as={FaMedal} boxSize={3.5} color="gold.500" />
                    <Text fontSize="sm">{coach.experience} experience</Text>
                  </HStack>
                  <Box borderTopWidth="1px" borderColor="gray.100" pt={3}>
                    <Text fontSize="xs" color="gray.500" textTransform="uppercase" letterSpacing="0.08em">
                      Specialty
                    </Text>
                    <Text fontSize="sm" color="gray.700" fontWeight="600">
                      {coach.specialty}
                    </Text>
                  </Box>
                </Stack>
              </Stack>
            </Reveal>
          ))}
        </Flex>
      </Container>
    </Box>
  );
}
