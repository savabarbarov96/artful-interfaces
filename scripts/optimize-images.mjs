import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_DIR = path.join(__dirname, '../clients');
const OUTPUT_DIR = path.join(__dirname, '../public/clients');

// Image optimization settings
const SIZES = {
  // For testimonial portraits - optimized for card display
  portrait: { width: 400, height: 400, fit: 'cover' },
  // For logos
  logo: { width: 200, height: 100, fit: 'contain' },
};

async function optimizeImage(inputPath, outputPath, options = {}) {
  const { width, height, fit = 'cover', quality = 85 } = options;

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Determine output format based on input (preserve transparency for PNGs)
    const isPng = metadata.format === 'png';
    const ext = isPng ? '.png' : '.webp';
    const outputWithExt = outputPath.replace(/\.[^.]+$/, ext);

    let pipeline = image.resize({
      width,
      height,
      fit,
      position: 'center',
    });

    if (isPng) {
      pipeline = pipeline.png({ quality, compressionLevel: 9 });
    } else {
      // Convert JPGs to WebP for better compression
      pipeline = pipeline.webp({ quality });
    }

    await pipeline.toFile(outputWithExt);

    // Also create a fallback JPG for broader compatibility
    if (!isPng) {
      const jpgPath = outputPath.replace(/\.[^.]+$/, '.jpg');
      await sharp(inputPath)
        .resize({ width, height, fit, position: 'center' })
        .jpeg({ quality, progressive: true })
        .toFile(jpgPath);
    }

    console.log(`✓ Optimized: ${path.basename(inputPath)} -> ${path.basename(outputWithExt)}`);
    return outputWithExt;
  } catch (error) {
    console.error(`✗ Failed to optimize ${inputPath}:`, error.message);
    throw error;
  }
}

async function main() {
  // Ensure output directory exists
  if (!existsSync(OUTPUT_DIR)) {
    await mkdir(OUTPUT_DIR, { recursive: true });
  }

  // Get all images from input directory
  const files = await readdir(INPUT_DIR);
  const imageFiles = files.filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));

  console.log(`\nFound ${imageFiles.length} images to optimize...\n`);

  for (const file of imageFiles) {
    const inputPath = path.join(INPUT_DIR, file);
    const outputBase = path.join(OUTPUT_DIR, file);

    // Determine if it's a logo or portrait based on filename
    const isLogo = file.toLowerCase().includes('logo');
    const settings = isLogo ? SIZES.logo : SIZES.portrait;

    await optimizeImage(inputPath, outputBase, settings);
  }

  console.log('\n✓ All images optimized successfully!\n');
}

main().catch(console.error);
