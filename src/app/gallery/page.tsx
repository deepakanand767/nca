import type { Metadata } from "next";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";
import { getGalleryImages } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from Nangal Cricket Academy — training sessions, matches, camps and academy life.",
};

export default function GalleryPage() {
  const images = getGalleryImages();

  return (
    <>
      <Navbar forceSolid />
      <Box as="main" pt={{ base: "64px", md: "76px" }}>
        {/* Header band */}
        <Box
          position="relative"
          overflow="hidden"
          py={{ base: 14, md: 20 }}
          bgGradient="to-br"
          gradientFrom="brand.800"
          gradientVia="brand.900"
          gradientTo="brand.950"
        >
          <Box
            position="absolute"
            inset="0"
            backgroundImage="radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)"
            backgroundSize="24px 24px"
            opacity={0.6}
          />
          <Container maxW="7xl" px={{ base: 4, md: 6 }} position="relative" zIndex={1}>
            <NextLink href="/" style={{ display: "inline-block", marginBottom: "16px" }}>
              <Text
                as="span"
                fontSize="sm"
                fontWeight="600"
                color="whiteAlpha.800"
                _hover={{ color: "gold.400" }}
              >
                ← Back to Home
              </Text>
            </NextLink>
            <Text
              textTransform="uppercase"
              letterSpacing="0.18em"
              fontWeight="700"
              fontSize="sm"
              color="gold.400"
            >
              Our Gallery
            </Text>
            <Heading
              as="h1"
              color="white"
              fontWeight="800"
              lineHeight="1.1"
              mt={2}
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            >
              Moments at the Academy
            </Heading>
            <Text color="whiteAlpha.800" fontSize={{ base: "md", md: "lg" }} mt={4} maxW="2xl">
              Training, matches, camps and the everyday grind that shapes our cricketers.
              {images.length > 0 && ` (${images.length} photos)`}
            </Text>
          </Container>
        </Box>

        {/* Grid */}
        <Box py={{ base: 12, md: 16 }} bg="white">
          <Container maxW="7xl" px={{ base: 4, md: 6 }}>
            {images.length === 0 ? (
              <Text textAlign="center" color="gray.500">
                Photos coming soon.
              </Text>
            ) : (
              <GalleryLightbox images={images} />
            )}
          </Container>
        </Box>
      </Box>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
