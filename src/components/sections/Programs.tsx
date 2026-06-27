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
import { FaCheck, FaArrowRight } from "react-icons/fa6";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { programs } from "@/data/programs";
import { buildWhatsAppLink, siteConfig } from "@/config/site";

export function Programs() {
  return (
    <Box as="section" id="programs" py={{ base: 16, md: 24 }} bg="gray.50">
      <Container maxW="7xl" px={{ base: 4, md: 6 }}>
        <SectionHeading
          eyebrow="Our Programs"
          title="Coaching For Every Stage of Your Game"
          subtitle="From first-time juniors to competitive club players, choose the program that matches your goals — or let us build a personalised plan just for you."
        />

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: 5, md: 6 }} mt={{ base: 12, md: 16 }}>
          {programs.map((program, i) => (
            <Reveal key={program.title} delay={(i % 3) * 0.1} h="full">
              <Stack
                h="full"
                gap={5}
                p={7}
                rounded="2xl"
                bg="white"
                borderWidth="1px"
                borderColor="gray.100"
                boxShadow="0 8px 30px rgba(0,0,0,0.04)"
                transition="transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease"
                _hover={{
                  transform: "translateY(-6px)",
                  boxShadow: "0 18px 44px rgba(27,94,32,0.14)",
                  borderColor: "brand.200",
                }}
              >
                <Flex align="center" justify="space-between">
                  <Flex
                    w="60px"
                    h="60px"
                    rounded="xl"
                    align="center"
                    justify="center"
                    bgGradient="to-br"
                    gradientFrom="brand.600"
                    gradientTo="brand.800"
                    color="gold.400"
                  >
                    <Icon as={program.icon} boxSize={7} />
                  </Flex>
                  <Text
                    fontSize="xs"
                    fontWeight="700"
                    px={3}
                    py={1.5}
                    rounded="full"
                    bg="gold.50"
                    color="gold.700"
                  >
                    {program.age}
                  </Text>
                </Flex>

                <Box>
                  <Text fontWeight="800" fontSize="xl" color="brand.800" mb={2}>
                    {program.title}
                  </Text>
                  <Text fontSize="sm" color="gray.600" lineHeight="1.7">
                    {program.description}
                  </Text>
                </Box>

                <Stack gap={2}>
                  {program.highlights.map((h) => (
                    <HStack key={h} gap={2.5} align="center">
                      <Flex
                        w="20px"
                        h="20px"
                        rounded="full"
                        bg="brand.50"
                        color="brand.700"
                        align="center"
                        justify="center"
                        flexShrink={0}
                      >
                        <Icon as={FaCheck} boxSize={2.5} />
                      </Flex>
                      <Text fontSize="sm" color="gray.700">
                        {h}
                      </Text>
                    </HStack>
                  ))}
                </Stack>

                <Link
                  href={buildWhatsAppLink(
                    `Hi ${siteConfig.fullName}, I'm interested in the "${program.title}" program. Could you share the details?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  mt="auto"
                  fontWeight="700"
                  color="brand.700"
                  fontSize="sm"
                  _hover={{ color: "gold.600", textDecoration: "none", gap: 3 }}
                  display="inline-flex"
                  alignItems="center"
                  gap={2}
                  transition="gap 0.2s ease, color 0.2s ease"
                >
                  Enquire on WhatsApp
                  <Icon as={FaArrowRight} boxSize={3} />
                </Link>
              </Stack>
            </Reveal>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
