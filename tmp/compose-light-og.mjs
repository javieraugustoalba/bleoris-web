import sharp from "sharp";

const backgroundPath =
  "C:/Users/User/.codex/generated_images/01a074dd-a2f8-7260-97fd-82fed00356dd/exec-2cec1f65-f0e4-4c6e-beb5-afc2eade12db.png";
const outputPath = "public/brand/bleoris-og.png";

const symbol = await sharp("public/brand/bleoris-symbol.svg")
  .resize({ fit: "contain", height: 72, width: 64 })
  .png()
  .toBuffer();

const typography = Buffer.from(`
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <style>
      text { font-family: Inter, Arial, Helvetica, sans-serif; }
    </style>
    <text x="142" y="87" fill="#315b7a" font-size="42" font-weight="700" letter-spacing="-1.6">Bleoris</text>
    <text x="58" y="272" fill="#315b7a" font-size="58" font-weight="700" letter-spacing="-2.2">Engineering Intelligence</text>
    <text x="58" y="343" fill="#315b7a" font-size="58" font-weight="700" letter-spacing="-2.2">for Tomorrow.</text>
    <text x="58" y="454" fill="#287a68" font-size="25" font-weight="700">Nature</text>
    <text x="147" y="454" fill="#526b82" font-size="23" font-weight="600">×</text>
    <text x="181" y="454" fill="#744fd0" font-size="25" font-weight="700">Cosmos</text>
    <text x="287" y="454" fill="#526b82" font-size="23" font-weight="600">×</text>
    <text x="321" y="454" fill="#3d67cb" font-size="25" font-weight="700">Technology</text>
  </svg>
`);

await sharp(backgroundPath)
  .resize(1200, 630, { fit: "cover" })
  .composite([
    { input: symbol, left: 58, top: 36 },
    { input: typography, left: 0, top: 0 },
  ])
  .png({ compressionLevel: 9 })
  .toFile(outputPath);
