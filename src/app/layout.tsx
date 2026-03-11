import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Santhosh Parampottupadam | AI Researcher & PhD Candidate',
  description:
    'Personal portfolio of Santhosh Parampottupadam — AI Researcher and PhD Candidate at University of Heidelberg & DKFZ, specializing in privacy-preserving medical AI.',
  keywords: [
    'AI Researcher',
    'Federated Learning',
    'Privacy-Preserving AI',
    'DKFZ',
    'Medical AI',
    'PhD',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-dark text-gray-200 antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
