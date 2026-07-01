/**
 * Central site configuration. Update real values here once available.
 */

// TODO: replace with the real WhatsApp number — country code + number, no "+", no spaces.
// Example for India: "919876543210"
export const WHATSAPP_NUMBER = "917973376623";

export const siteConfig = {
  name: "NCA",
  fullName: "Nangal Cricket Academy",
  tagline: "Where Champions Are Made",
  description:
    "Nangal Cricket Academy (NCA) — professional cricket coaching for all ages. Expert coaches, modern facilities, and match exposure to take your game to the next level.",
  // TODO: replace contact details with the real ones.
  email: "info@nangalcricketacademy.com",
  phoneDisplay: "+91 79733 76623",
  address: "Nangal, Rupnagar, Punjab 140124, India",
  hours: "Mon – Sat: 6:00 AM – 9:00 AM & 4:00 PM – 8:00 PM",
  // Google Maps embed URL for Nangal (swap with your exact ground location).
  mapEmbedUrl:
    "https://www.google.com/maps?q=Nangal,+Punjab,+India&output=embed",
  socials: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
  },
};

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Programs", href: "/#programs" },
  { label: "Coaches", href: "/#coaches" },
  { label: "Facilities", href: "/#facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/#contact" },
];

/** Build a wa.me deep link with an optional pre-filled message. */
export const buildWhatsAppLink = (message?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;
