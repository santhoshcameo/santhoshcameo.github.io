'use client';

import { motion } from 'framer-motion';
import { FaTrophy, FaMicrophone, FaBookOpen, FaCertificate, FaAward } from 'react-icons/fa';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import { profile } from '@/data/profile';

const highlights = [
  {
    icon: FaTrophy,
    title: 'RSNA Magna Cum Laude',
    subtitle: 'Chicago 2024',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
  },
  {
    icon: FaBookOpen,
    title: 'Nature Communications',
    subtitle: 'Co-Author, 2025',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
  },
  {
    icon: FaBookOpen,
    title: 'MICCAI 2024',
    subtitle: 'First Author, Morocco',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
  },
  {
    icon: FaBookOpen,
    title: 'IEEE JBHI',
    subtitle: 'Co-Author, Under Review',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    icon: FaAward,
    title: 'AI Student of the Year',
    subtitle: 'Finalist, AI Awards Ireland 2018',
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
  },
  {
    icon: FaAward,
    title: 'Data Scientist Student of the Year',
    subtitle: 'Finalist, DatSci Awards Ireland 2018',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
  },
  {
    icon: FaMicrophone,
    title: 'Invited Speaker',
    subtitle: 'PET Summit Zurich, World ML Summit Dublin',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
  {
    icon: FaCertificate,
    title: '3 Certifications',
    subtitle: 'Stanford ML, AWS, Cloudera',
    color: 'text-accent-light',
    bg: 'bg-accent/10',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="About Me" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <GlassCard hover={false}>
            <p className="text-gray-300 leading-relaxed text-lg">{profile.summary}</p>
          </GlassCard>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <GlassCard className="h-full">
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center flex-shrink-0`}>
                    <item.icon className={item.color} size={18} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm">{item.title}</h3>
                    <p className="text-gray-400 text-xs mt-1">{item.subtitle}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
