'use client';

import { motion } from 'framer-motion';
import {
  FaTrophy,
  FaMicrophone,
  FaAward,
  FaCertificate,
  FaChalkboardTeacher,
} from 'react-icons/fa';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import { awards } from '@/data/awards';
import { IconType } from 'react-icons';

const iconMap: Record<string, IconType> = {
  FaTrophy,
  FaMicrophone,
  FaAward,
  FaCertificate,
  FaChalkboardTeacher,
};

export default function Awards() {
  return (
    <section id="awards" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Awards & Certifications"
          subtitle="Recognition, speaking engagements, and credentials"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, i) => {
            const Icon = iconMap[award.icon] || FaAward;
            return (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <GlassCard className="h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-accent-light" size={18} />
                    </div>
                    {award.year && (
                      <span className="text-gray-500 text-sm ml-auto">{award.year}</span>
                    )}
                  </div>
                  <h3 className="text-white font-medium mb-2">{award.title}</h3>
                  <p className="text-gray-400 text-sm">{award.description}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
