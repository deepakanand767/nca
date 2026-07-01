import fs from "node:fs";
import path from "node:path";

export interface GalleryImage {
  src: string; // public URL, e.g. /gallery/nca-01.jpg
  alt: string;
}

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"]);

/**
 * Reads every image in `public/gallery` at build time.
 * Drop new photos into that folder and they show up automatically on the next build.
 * Server-only (uses fs) — import this only from Server Components.
 */
export function getGalleryImages(): GalleryImage[] {
  const dir = path.join(process.cwd(), "public", "gallery");
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return [];
  }
  return files
    .filter((f) => IMAGE_EXT.has(path.extname(f).toLowerCase()))
    .sort()
    .map((file, i) => ({
      src: `/gallery/${encodeURIComponent(file)}`,
      alt: `Nangal Cricket Academy — photo ${i + 1}`,
    }));
}

/**
 * Returns a seeded-random subset for the homepage "featured" grid.
 * Seeded so the selection is stable within a build (no hydration mismatch),
 * but still looks like a hand-picked, varied mix.
 */
export function getFeaturedImages(count: number, seed = 7): GalleryImage[] {
  const all = [...getGalleryImages()];
  // Fisher–Yates shuffle driven by a small deterministic LCG.
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  const rand = () => (s = (s * 16807) % 2147483647) / 2147483647;
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]];
  }
  return all.slice(0, Math.min(count, all.length));
}
