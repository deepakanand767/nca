"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Icon,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaClock,
} from "react-icons/fa6";
import { SectionHeading } from "@/components/common/SectionHeading";
import { buildWhatsAppLink, siteConfig } from "@/config/site";

const contactItems = [
  { icon: FaPhone, label: "Phone", value: siteConfig.phoneDisplay, href: `tel:${siteConfig.phoneDisplay.replace(/\s/g, "")}` },
  { icon: FaEnvelope, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: FaLocationDot, label: "Address", value: siteConfig.address },
  { icon: FaClock, label: "Training Hours", value: siteConfig.hours },
];

export function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const composedMessage = `Hi ${siteConfig.fullName}!%0A%0AName: ${name || "(not provided)"}%0APhone: ${phone || "(not provided)"}%0A%0A${message || "I'd like to know more about your coaching programs."}`;

  const handleWhatsApp = () => {
    const text = `Hi ${siteConfig.fullName}!\n\nName: ${name || "(not provided)"}\nPhone: ${phone || "(not provided)"}\n\n${message || "I'd like to know more about your coaching programs."}`;
    window.open(buildWhatsAppLink(text), "_blank", "noopener,noreferrer");
  };

  const mailtoHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    "Cricket coaching enquiry"
  )}&body=${composedMessage}`;

  const inputStyles = {
    bg: "gray.50",
    borderColor: "gray.200",
    rounded: "lg" as const,
    _hover: { borderColor: "gray.300" },
    _focus: { borderColor: "brand.500", boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)" },
  };

  return (
    <Box as="section" id="contact" py={{ base: 16, md: 24 }} bg="white">
      <Container maxW="7xl" px={{ base: 4, md: 6 }}>
        <SectionHeading
          eyebrow="Contact Us"
          title="Ready to Start Your Cricket Journey?"
          subtitle="Send us your details and we'll get back to you on WhatsApp. Walk-ins are welcome during training hours too!"
        />

        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 8, md: 10 }} mt={{ base: 12, md: 16 }} alignItems="stretch">
          {/* Form */}
          <Box
            p={{ base: 6, md: 8 }}
            rounded="2xl"
            bg="white"
            borderWidth="1px"
            borderColor="gray.100"
            boxShadow="0 12px 40px rgba(0,0,0,0.06)"
          >
            <Stack gap={5}>
              <Text fontWeight="800" fontSize="xl" color="brand.800">
                Send an Enquiry
              </Text>

              <Stack gap={1.5}>
                <Text fontSize="sm" fontWeight="600" color="gray.700">
                  Your Name
                </Text>
                <Input
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  {...inputStyles}
                />
              </Stack>

              <Stack gap={1.5}>
                <Text fontSize="sm" fontWeight="600" color="gray.700">
                  Phone Number
                </Text>
                <Input
                  type="tel"
                  placeholder="e.g. 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  {...inputStyles}
                />
              </Stack>

              <Stack gap={1.5}>
                <Text fontSize="sm" fontWeight="600" color="gray.700">
                  Message
                </Text>
                <Textarea
                  placeholder="Which program are you interested in? Any questions?"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  {...inputStyles}
                />
              </Stack>

              <Button
                onClick={handleWhatsApp}
                size="lg"
                bg="#25D366"
                color="white"
                fontWeight="700"
                rounded="full"
                _hover={{ bg: "#1ebe5b" }}
              >
                <Icon as={FaWhatsapp} boxSize={5} />
                Send via WhatsApp
              </Button>

              <Text fontSize="xs" color="gray.500" textAlign="center">
                Prefer email?{" "}
                <Link href={mailtoHref} color="brand.700" fontWeight="600">
                  Email us instead
                </Link>
              </Text>
            </Stack>
          </Box>

          {/* Info + map */}
          <Stack gap={6}>
            <Stack gap={4}>
              {contactItems.map((item) => {
                const content = (
                  <HStack
                    gap={4}
                    p={4}
                    rounded="xl"
                    borderWidth="1px"
                    borderColor="gray.100"
                    bg="gray.50"
                    align="flex-start"
                    transition="all 0.2s ease"
                    _hover={{ borderColor: "brand.200", bg: "brand.50" }}
                  >
                    <Flex
                      w="44px"
                      h="44px"
                      rounded="lg"
                      flexShrink={0}
                      align="center"
                      justify="center"
                      bg="brand.700"
                      color="gold.400"
                    >
                      <Icon as={item.icon} boxSize={5} />
                    </Flex>
                    <Box>
                      <Text fontSize="xs" color="gray.500" textTransform="uppercase" letterSpacing="0.08em" fontWeight="700">
                        {item.label}
                      </Text>
                      <Text fontSize="sm" color="gray.800" fontWeight="600">
                        {item.value}
                      </Text>
                    </Box>
                  </HStack>
                );
                return item.href ? (
                  <Link key={item.label} href={item.href} _hover={{ textDecoration: "none" }}>
                    {content}
                  </Link>
                ) : (
                  <Box key={item.label}>{content}</Box>
                );
              })}
            </Stack>

            {/* Map */}
            <Box
              rounded="2xl"
              overflow="hidden"
              borderWidth="1px"
              borderColor="gray.100"
              boxShadow="0 12px 40px rgba(0,0,0,0.06)"
              h={{ base: "240px", md: "260px" }}
            >
              <Box
                as="iframe"
                // @ts-expect-error iframe attributes on Chakra Box
                src={siteConfig.mapEmbedUrl}
                title="NCA location map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
