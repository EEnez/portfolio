"use client";

import Link from 'next/link';
import { GithubIcon, LinkedInIcon, TwitterIcon } from './SocialIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="#home" className="text-2xl font-bold text-primary">
              Portfolio
            </Link>
            <p className="mt-2 text-muted max-w-md">
              CODE &amp; UX
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#home" className="text-muted hover:text-primary transition-colors">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-muted hover:text-primary transition-colors">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-muted hover:text-primary transition-colors">
                    Projets
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-muted">
                  <span className="text-primary">Email:</span> enezgubeljic@gmail.com
                </li>
                <li className="text-muted">
                  <span className="text-primary">Téléphone:</span> +32 486 08 13 69
                </li>
                <li className="text-muted">
                  <span className="text-primary">Adresse:</span> Bruxelles, Belgique
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Réseaux sociaux</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/EEnez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-primary transition-colors group"
                >
                  <GithubIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/enez-gubeljic-76313229b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-primary transition-colors group"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://x.com/Enez_Gubeljic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-primary transition-colors group"
                >
                  <TwitterIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center text-muted">
          <p>© {currentYear} Enez Gubeljic. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
} 