import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { profile } from '@/data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-dark-300 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-accent-light transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-accent-light transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-gray-500 hover:text-accent-light transition-colors"
            aria-label="Email"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
