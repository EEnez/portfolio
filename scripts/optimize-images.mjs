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
      
      // Pour la version modale, copier directement le fichier PNG original
      await fs.copyFile(inputPath, path.join(outputDir, `${baseName}-modal.png`));

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