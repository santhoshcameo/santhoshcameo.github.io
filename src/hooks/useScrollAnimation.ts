'use client';

import { useInView } from 'react-intersection-observer';

export function useScrollAnimation(threshold = 0.1) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  });

  return { ref, inView };
}
