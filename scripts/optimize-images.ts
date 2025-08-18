import sharp from 'sharp';
import path from 'path';
import fs from 'fs/promises';

const inputDir = path.join(process.cwd(), 'public', 'projects');
const outputDir = path.join(process.cwd(), 'public', 'images');

async function optimizeImages() {
  try {
    // Créer le dossier de sortie s'il n'existe pas
    await fs.mkdir(outputDir, { recursive: true });

    // Créer le dossier d'entrée s'il n'existe pas
    await fs.mkdir(inputDir, { recursive: true });

    // Lire tous les fichiers du dossier d'entrée
    const files = await fs.readdir(inputDir);
    
    // Filtrer pour ne garder que les images
    const imageFiles = files.filter(file => 
      file.toLowerCase().endsWith('.png') || 
      file.toLowerCase().endsWith('.jpg') || 
      file.toLowerCase().endsWith('.jpeg')
    );

    if (imageFiles.length === 0) {
      console.log('⚠️ Aucune image trouvée dans', inputDir);
      return;
    }

    for (const file of imageFiles) {
      const inputPath = path.join(inputDir, file);
      const baseName = path.basename(file, path.extname(file));
      
      // Obtenir les dimensions de l'image originale
      const metadata = await sharp(inputPath).metadata();
      const width = metadata.width || 1920;
      const height = metadata.height || 1080;
      
      // Créer une version modale en PNG (conserve la qualité maximale)
      await sharp(inputPath)
        .resize(Math.min(1920, width), Math.min(1080, height), {
          fit: 'inside',
          withoutEnlargement: true
        })
        .png({
          quality: 100,
          compressionLevel: 9
        })
        .toFile(path.join(outputDir, `${baseName}-modal.png`));

      // Créer une version thumbnail en WebP
      await sharp(inputPath)
        .resize(400, 192, {
          fit: 'cover',
          position: 'center'
        })
        .webp({ 
          quality: 90,
          effort: 6
        })
        .toFile(path.join(outputDir, `${baseName}-thumbnail.webp`));

      console.log(`✅ Optimisé: ${file}`);
    }
  } catch (error) {
    console.error('Erreur lors de l\'optimisation des images:', error);
    process.exit(1);
  }
}

optimizeImages(); 