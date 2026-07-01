import { Box, Button, Container, Flex, Image, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { getFeaturedImages } from "@/lib/gallery";

export function Gallery() {
  const featured = getFeaturedImages(8);

  return (
    <Box as="section" id="gallery" py={{ base: 16, md: 24 }} bg="white">
      <Container maxW="7xl" px={{ base: 4, md: 6 }}>
        <SectionHeading
          eyebrow="Gallery"
          title="Life at the Academy"
          subtitle="A glimpse of the training, matches and moments that make NCA special."
        />

        {featured.length === 0 ? (
          <Text textAlign="center" color="gray.500" mt={12}>
            Photos coming soon.
          </Text>
        ) : (
          <>
            <Box className="masonry" mt={{ base: 12, md: 16 }}>
              {featured.map((img, i) => (
                <Reveal key={img.src} delay={(i % 4) * 0.08}>
                  <NextLink href="/gallery" style={{ display: "block" }}>
                    <Box
                      position="relative"
                      rounded="xl"
                      overflow="hidden"
                      boxShadow="0 8px 24px rgba(0,0,0,0.08)"
                      transition="transform 0.3s ease, box-shadow 0.3s ease"
                      _hover={{
                        transform: "translateY(-4px)",
                        boxShadow: "0 18px 36px rgba(27,94,32,0.22)",
                        "& img": { transform: "scale(1.05)" },
                      }}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        w="full"
                        display="block"
                        loading="lazy"
                        transition="transform 0.4s ease"
                      />
                      <Box
                        position="absolute"
                        inset="0"
                        bgGradient="to-t"
                        gradientFrom="blackAlpha.400"
                        gradientTo="transparent"
                      />
                    </Box>
                  </NextLink>
                </Reveal>
              ))}
            </Box>

            <Flex justify="center" mt={{ base: 8, md: 12 }}>
              <Button
                asChild
                size="lg"
                bg="brand.700"
                color="white"
                fontWeight="700"
                rounded="full"
                px={8}
                _hover={{ bg: "brand.800", transform: "translateY(-2px)" }}
                transition="all 0.2s ease"
              >
                <NextLink href="/gallery">View Full Gallery →</NextLink>
              </Button>
            </Flex>
          </>
        )}
      </Container>
    </Box>
  );
}
