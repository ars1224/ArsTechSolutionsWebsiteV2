import sharp from 'sharp'
import fs from 'fs'

fs.mkdirSync('./src/assets/optimized', {
  recursive: true
})

/* =========================
   HERO
========================= */

const heroSource = './src/assets/hero-ars-devices.png'
const heroWidths = [720, 1080, 1440]

for (const width of heroWidths) {

  await sharp(heroSource)
    .resize({
      width,
      withoutEnlargement: true
    })
    .webp({
      quality: 82,
      effort: 6
    })
    .toFile(
      `./src/assets/optimized/hero-ars-devices-${width}.webp`
    )

  await sharp(heroSource)
    .resize({
      width,
      withoutEnlargement: true
    })
    .avif({
      quality: 55,
      effort: 6
    })
    .toFile(
      `./src/assets/optimized/hero-ars-devices-${width}.avif`
    )
}

/*
  Keep a standard WebP fallback for now.
  We can remove it later if it becomes unnecessary.
*/
await sharp(heroSource)
  .resize({
    width: 1440,
    withoutEnlargement: true
  })
  .webp({
    quality: 82,
    effort: 6
  })
  .toFile(
    './src/assets/optimized/hero-ars-devices.webp'
  )


/* =========================
   MAIN LOGO
========================= */

await sharp('./src/assets/Logo.png')
  .resize({
    width: 480,
    withoutEnlargement: true
  })
  .webp({
    quality: 90,
    effort: 6
  })
  .toFile(
    './src/assets/optimized/logo.webp'
  )


/* =========================
   SOCIAL ICONS
========================= */

await sharp(
  './src/assets/Facebook_Logo_Secondary.png'
)
  .resize(96, 96, {
    fit: 'contain'
  })
  .png({
    compressionLevel: 9
  })
  .toFile(
    './src/assets/optimized/facebook.png'
  )

await sharp(
  './src/assets/Instagram_Glyph_White.png'
)
  .resize(96, 96, {
    fit: 'contain'
  })
  .png({
    compressionLevel: 9
  })
  .toFile(
    './src/assets/optimized/instagram.png'
  )

await sharp(
  './src/assets/Digital_Glyph_White_RGB_2026.png'
)
  .resize(96, 96, {
    fit: 'contain'
  })
  .png({
    compressionLevel: 9
  })
  .toFile(
    './src/assets/optimized/whatsapp.png'
  )


/* =========================
   PUBLIC SCHEMA LOGO
========================= */

await sharp('./src/assets/Logo.png')
  .resize({
    width: 512,
    withoutEnlargement: true
  })
  .png({
    compressionLevel: 9,
    palette: true
  })
  .toFile(
    './public/ars-tech-solutions-logo.png'
  )


/* =========================
   FAVICON
========================= */

await sharp('./src/assets/Logo.png')
  .resize(512, 512, {
    fit: 'contain',
    background: {
      r: 0,
      g: 0,
      b: 0,
      alpha: 0
    }
  })
  .png({
    compressionLevel: 9,
    palette: true
  })
  .toFile(
    './public/favicon.png'
  )


/* =========================
   APPLE TOUCH ICON
========================= */

await sharp('./src/assets/Logo.png')
  .resize(180, 180, {
    fit: 'contain',
    background: {
      r: 0,
      g: 0,
      b: 0,
      alpha: 0
    }
  })
  .png({
    compressionLevel: 9,
    palette: true
  })
  .toFile(
    './public/apple-touch-icon.png'
  )
/* =========================
   PROJECT IMAGES
========================= */

const projectsDir = './src/assets/projects'

const projectFiles = fs.readdirSync(projectsDir)

const supportedProjectFormats = [
  '.jpg',
  '.jpeg',
  '.png'
]

for (const file of projectFiles) {

  const extension = file
    .substring(file.lastIndexOf('.'))
    .toLowerCase()

  if (!supportedProjectFormats.includes(extension)) {
    continue
  }

  const inputPath = `${projectsDir}/${file}`

  const fileName = file.substring(
    0,
    file.lastIndexOf('.')
  )

  const outputPath =
    `${projectsDir}/${fileName}.webp`

  await sharp(inputPath)
    .rotate()
    .resize({
      width: 1600,
      withoutEnlargement: true
    })
    .webp({
      quality: 82,
      effort: 6
    })
    .toFile(outputPath)

  const originalSize =
    fs.statSync(inputPath).size

  const optimizedSize =
    fs.statSync(outputPath).size

  const saving =
    ((originalSize - optimizedSize) /
      originalSize *
      100
    ).toFixed(1)

  console.log(
    `📸 ${file} → ${fileName}.webp | ` +
    `${(originalSize / 1024).toFixed(0)} KB → ` +
    `${(optimizedSize / 1024).toFixed(0)} KB | ` +
    `${saving}% smaller`
  )
}

console.log('✅ ARS images optimized')