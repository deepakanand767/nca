import { Heading, Stack, Text, Box } from "@chakra-ui/react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
}

/** Reusable section header: small gold eyebrow + bold title + optional subtitle. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <Stack
      gap={4}
      align={isCenter ? "center" : "flex-start"}
      textAlign={isCenter ? "center" : "left"}
      maxW={isCenter ? "3xl" : undefined}
      mx={isCenter ? "auto" : undefined}
    >
      <Text
        textTransform="uppercase"
        letterSpacing="0.18em"
        fontWeight="700"
        fontSize="sm"
        color="gold.600"
      >
        {eyebrow}
      </Text>
      <Heading
        as="h2"
        lineHeight="1.1"
        fontWeight="800"
        color="brand.800"
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
      >
        {title}
      </Heading>
      <Box w="56px" h="4px" bg="gold.500" borderRadius="full" alignSelf={isCenter ? "center" : "flex-start"} />
      {subtitle && (
        <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" lineHeight="1.7">
          {subtitle}
        </Text>
      )}
    </Stack>
  );
}
