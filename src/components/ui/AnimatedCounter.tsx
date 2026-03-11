'use client';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export default function AnimatedCounter({ value, suffix = '', label }: AnimatedCounterProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
        {inView ? <CountUp end={value} duration={2.5} /> : '0'}
        {suffix}
      </div>
      <p className="text-gray-400 text-sm">{label}</p>
    </div>
  );
}
