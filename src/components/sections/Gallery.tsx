import { Box, Container, SimpleGrid, Text } from "@chakra-ui/react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { gallery } from "@/data/gallery";

export function Gallery() {
  return (
    <Box as="section" id="gallery" py={{ base: 16, md: 24 }} bg="white">
      <Container maxW="7xl" px={{ base: 4, md: 6 }}>
        <SectionHeading
          eyebrow="Gallery"
          title="Life at the Academy"
          subtitle="A glimpse of the training, matches and moments that make NCA special. (Swap these placeholders with your real photos anytime.)"
        />

        <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} gap={{ base: 3, md: 4 }} mt={{ base: 12, md: 16 }}>
          {gallery.map((item, i) => (
            <Reveal key={item.label} delay={(i % 4) * 0.08}>
              <Box
                position="relative"
                h={{ base: "150px", md: "210px" }}
                rounded="xl"
                overflow="hidden"
                cursor="pointer"
                bgGradient="to-br"
                gradientFrom={item.from}
                gradientTo={item.to}
                boxShadow="0 8px 24px rgba(0,0,0,0.08)"
                transition="transform 0.3s ease, box-shadow 0.3s ease"
                _hover={{
                  transform: "translateY(-4px) scale(1.02)",
                  boxShadow: "0 18px 36px rgba(27,94,32,0.22)",
                }}
              >
                {/* legibility overlay */}
                <Box
                  position="absolute"
                  inset="0"
                  bgGradient="to-t"
                  gradientFrom="blackAlpha.700"
                  gradientTo="transparent"
                />
                <Box position="absolute" bottom="0" left="0" right="0" p={4}>
                  <Text fontSize="2xs" fontWeight="700" color="gold.300" textTransform="uppercase" letterSpacing="0.08em">
                    {item.category}
                  </Text>
                  <Text fontWeight="800" fontSize={{ base: "sm", md: "md" }} color="white">
                    {item.label}
                  </Text>
                </Box>
              </Box>
            </Reveal>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
