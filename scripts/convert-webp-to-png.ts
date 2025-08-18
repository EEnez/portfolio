import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const PROJECTS_DIR = path.join(process.cwd(), 'public', 'projects');

async function convertWebpToPng() {
  const files = fs.readdirSync(PROJECTS_DIR);
  
  for (const file of files) {
    if (file.endsWith('.webp')) {
      const inputPath = path.join(PROJECTS_DIR, file);
      const outputPath = path.join(PROJECTS_DIR, file.replace('.webp', '.png'));
      
      try {
        await sharp(inputPath)
          .png()
          .toFile(outputPath);
        console.log(`✅ Converti: ${file} -> ${file.replace('.webp', '.png')}`);
      } catch (error) {
        console.error(`❌ Erreur lors de la conversion de ${file}:`, error);
      }
    }
  }
}

convertWebpToPng().catch(console.error); 