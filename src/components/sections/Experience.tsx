'use client';

import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey in AI, data science, and research"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-dark-300" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-6 top-8 w-5 h-5 rounded-full bg-accent border-4 border-dark flex items-center justify-center">
                  <FaBriefcase className="text-[8px] text-white" />
                </div>

                <GlassCard>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                      <p className="text-accent-light text-sm">{exp.company}</p>
                    </div>
                    <div className="text-gray-500 text-sm mt-1 md:mt-0 md:text-right">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-accent mt-1.5 flex-shrink-0">&#8226;</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
