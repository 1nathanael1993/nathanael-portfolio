import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateCollage() {
  const width = 1600;
  const height = 900;
  const panelHeight = 750;
  const gap = 80;

  // Width of each panel so that both + gap are nicely centered
  const totalPanelsWidth = width - gap;
  const panelWidth = Math.floor(totalPanelsWidth / 2);

  const background = "#0a0a0a";

  const base = sharp({
    create: {
      width,
      height,
      channels: 3,
      background,
    },
  });

  const assetsDir = path.resolve(__dirname, "..", "public", "images", "projects");
  const leftPath = path.join(assetsDir, "veristay-start.jpg");
  const rightPath = path.join(assetsDir, "veristay-result.jpg");
  const outputPath = path.join(assetsDir, "veristay-collage.jpg");

  const top = Math.floor((height - panelHeight) / 2);

  const panelsTotal = panelWidth * 2 + gap;
  const leftX = Math.floor((width - panelsTotal) / 2);
  const rightX = leftX + panelWidth + gap;

  const leftImage = await sharp(leftPath)
    .resize(panelWidth, panelHeight, { fit: "cover", position: "centre" })
    .jpeg({ quality: 90 })
    .toBuffer();

  const rightImage = await sharp(rightPath)
    .resize(panelWidth, panelHeight, { fit: "cover", position: "centre" })
    .jpeg({ quality: 90 })
    .toBuffer();

  await base
    .composite([
      {
        input: leftImage,
        top,
        left: leftX,
      },
      {
        input: rightImage,
        top,
        left: rightX,
      },
    ])
    .jpeg({ quality: 90 })
    .toFile(outputPath);

  // eslint-disable-next-line no-console
  console.log("✅ Generated collage at:", outputPath);
}

generateCollage().catch((err) => {
  // eslint-disable-next-line no-console
  console.error("Error generating VeriStay collage:", err);
  process.exit(1);
});

