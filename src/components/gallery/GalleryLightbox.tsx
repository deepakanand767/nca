"use client";

import { Box, Flex, Icon, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaXmark, FaExpand } from "react-icons/fa6";
import { Reveal } from "@/components/common/Reveal";
import type { GalleryImage } from "@/lib/gallery";

export function GalleryLightbox({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const isOpen = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );

  // keyboard controls + body scroll lock while the lightbox is open
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close, next, prev]);

  return (
    <>
      <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} gap={{ base: 3, md: 4 }}>
        {images.map((img, i) => (
          <Reveal key={img.src} delay={(i % 4) * 0.06}>
            <Box
              role="button"
              aria-label={`Open ${img.alt}`}
              onClick={() => setIndex(i)}
              position="relative"
              cursor="pointer"
              h={{ base: "150px", sm: "190px", md: "230px" }}
              rounded="xl"
              overflow="hidden"
              boxShadow="0 8px 24px rgba(0,0,0,0.08)"
              transition="transform 0.3s ease, box-shadow 0.3s ease"
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "0 18px 36px rgba(27,94,32,0.22)",
                "& img": { transform: "scale(1.08)" },
                "& .zoom": { opacity: 1 },
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                w="full"
                h="full"
                objectFit="cover"
                loading="lazy"
                transition="transform 0.4s ease"
              />
              <Flex
                className="zoom"
                position="absolute"
                inset="0"
                align="center"
                justify="center"
                bg="blackAlpha.400"
                opacity={0}
                transition="opacity 0.3s ease"
              >
                <Flex
                  w="48px"
                  h="48px"
                  rounded="full"
                  bg="whiteAlpha.900"
                  align="center"
                  justify="center"
                >
                  <Icon as={FaExpand} boxSize={5} color="brand.800" />
                </Flex>
              </Flex>
            </Box>
          </Reveal>
        ))}
      </SimpleGrid>

      {/* Lightbox overlay */}
      {isOpen && (
        <Flex
          position="fixed"
          inset="0"
          zIndex={2000}
          bg="blackAlpha.900"
          align="center"
          justify="center"
          onClick={close}
          p={{ base: 3, md: 8 }}
        >
          {/* Close */}
          <Flex
            as="button"
            aria-label="Close"
            onClick={close}
            position="absolute"
            top={{ base: 3, md: 6 }}
            right={{ base: 3, md: 6 }}
            w="44px"
            h="44px"
            rounded="full"
            bg="whiteAlpha.200"
            align="center"
            justify="center"
            color="white"
            _hover={{ bg: "whiteAlpha.400" }}
          >
            <Icon as={FaXmark} boxSize={5} />
          </Flex>

          {/* Prev */}
          <Flex
            as="button"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            position="absolute"
            left={{ base: 2, md: 6 }}
            w={{ base: "40px", md: "52px" }}
            h={{ base: "40px", md: "52px" }}
            rounded="full"
            bg="whiteAlpha.200"
            align="center"
            justify="center"
            color="white"
            _hover={{ bg: "whiteAlpha.400" }}
          >
            <Icon as={FaChevronLeft} boxSize={5} />
          </Flex>

          {/* Image */}
          <Box onClick={(e) => e.stopPropagation()} maxW="92vw" maxH="86vh">
            <Image
              src={images[index].src}
              alt={images[index].alt}
              maxW="92vw"
              maxH="86vh"
              objectFit="contain"
              rounded="lg"
              boxShadow="0 20px 60px rgba(0,0,0,0.5)"
            />
            <Text mt={3} textAlign="center" color="whiteAlpha.800" fontSize="sm">
              {index + 1} / {images.length}
            </Text>
          </Box>

          {/* Next */}
          <Flex
            as="button"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            position="absolute"
            right={{ base: 2, md: 6 }}
            w={{ base: "40px", md: "52px" }}
            h={{ base: "40px", md: "52px" }}
            rounded="full"
            bg="whiteAlpha.200"
            align="center"
            justify="center"
            color="white"
            _hover={{ bg: "whiteAlpha.400" }}
          >
            <Icon as={FaChevronRight} boxSize={5} />
          </Flex>
        </Flex>
      )}
    </>
  );
}
