"use client";

import { Icon, Link } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa6";
import { buildWhatsAppLink, siteConfig } from "@/config/site";

/** Fixed circular WhatsApp button shown on every part of the page. */
export function FloatingWhatsApp() {
  return (
    <Link
      href={buildWhatsAppLink(
        `Hi ${siteConfig.fullName}, I'd like to know more about your cricket coaching programs.`
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      position="fixed"
      bottom={{ base: "20px", md: "28px" }}
      right={{ base: "20px", md: "28px" }}
      zIndex={1000}
      w={{ base: "56px", md: "64px" }}
      h={{ base: "56px", md: "64px" }}
      borderRadius="full"
      bg="#25D366"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      boxShadow="0 10px 25px rgba(37, 211, 102, 0.45)"
      transition="transform 0.2s ease, box-shadow 0.2s ease"
      _hover={{ transform: "scale(1.08)", boxShadow: "0 14px 30px rgba(37, 211, 102, 0.55)" }}
      animation="pulse 2.4s infinite"
    >
      <Icon as={FaWhatsapp} boxSize={{ base: 7, md: 8 }} />
    </Link>
  );
}
